const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isUser} = require("../middlewares/guards")
const {parseError} = require('../util/parsers')

router.get('/catalog',async(req,res) =>{
    const jobs = await req.storage.getAllJobs()
    res.render('ad/catalog',{jobs,title:'Catalog Page'})
})

router.get('/create',isUser(),(req,res) =>{
    res.render('ad/create',{title:'Create Page'})
})
router.post('/create',
    isUser(),
    body('headline').isLength({min:4}).withMessage('Headline must be at least 4 characters long!'),
    body('location').isLength({min:8}).withMessage('Location must be at least 8 characters long!'),
    body('companyName').isLength({min:3}).withMessage('Company name must be at least 3 characters long!'),
    body('companyDescription').isLength({max:40}).withMessage('Description must be at most 40 characters long!'),
async (req,res) =>{

    const {errors} = validationResult(req);

    try {
        if(errors.length > 0){
            throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
        }
        const jobData = {
            headline: req.body.headline,
            location: req.body.location,
            companyName: req.body.companyName,
            companyDescription: req.body.companyDescription,
            author: req.user._id
        }
        await req.storage.createJob(jobData)

        res.redirect('/ad/catalog')
    } catch (err) {
        console.log(err.message)
        const ctx = {
            errors: parseError(err),
            jobData: {
                headline: req.body.headline,
                location: req.body.location,
                companyName: req.body.companyName,
                companyDescription: req.body.companyDescription
            },
            title:'Create Page'
        }
        res.render('ad/create', ctx)
    }
})
router.get('/details/:id',async(req,res) => {

    try{
        const job = await req.storage.getJobById(req.params.id)

        job.isAuthor = req.user && req.user._id == job.author._id
        job.isUser = Boolean(req.user)

        job.isApplied = req.user && job.applied.find(x => x._id == req.user._id)
        job.appliedPeople = job.applied.length


        res.render('ad/details',{job,title:'Details Page'})
    }catch (err) {
        res.redirect('/404')
    }
})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const job = await req.storage.getJobById(req.params.id)

        if(job.author._id != req.user._id){
            throw new Error('Cannot edit job you haven\'t created')
        }

        res.render('ad/edit',{job,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/ad/details/' + req.params.id)
    }
})
router.post('/edit/:id',
    isUser(),
    body('headline').isLength({min:4}).withMessage('Headline must be at least 4 characters long!').bail(),
    body('location').isLength({min:8}).withMessage('Location must be at least 8 characters long!').bail(),
    body('companyName').isLength({min:3}).withMessage('Company name must be at least 3 characters long!').bail(),
    body('companyDescription').isLength({max:40}).withMessage('Description must be at most 40 characters long!').bail(),
    async(req,res) => {

        try{

            const job = await req.storage.getJobById(req.params.id)

            if(job.author._id != req.user._id){
                throw new Error('Cannot edit job you haven\'t created')
            }

            await req.storage.editJob(req.params.id,req.body)

            res.redirect('/ad/details/' + req.params.id)

        }catch (err) {
            const ctx = {
                errors: parseError(err),
                job:{
                    _id:req.params.id,
                    headline: req.body.headline,
                    location: req.body.location,
                    companyName: req.body.companyName,
                    companyDescription: req.body.companyDescription
                },
                title:'Edit Page'
            }
            res.render('ad/edit',ctx)
        }

    })

router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const job = await req.storage.getJobById(req.params.id)
        if(job.author._id != req.user._id) {
            throw new Error('Cannot delete job,you haven\'t created!')
        }
        await req.storage.deleteJob(req.params.id)
        res.redirect('/ad/catalog')

    }catch (err) {
        console.log(err.message)
        res.redirect('/ad/catalog/' + req.params.id)
    }
})
router.get('/apply/:id',isUser(),async(req,res) => {
    try{
        const job = await req.storage.getJobById(req.params.id)
        if(job.author._id == req.user._id){
            throw new Error('Cannot apply your own job')
        }
        console.log(job)
        await req.storage.applyJob(req.params.id,req.user._id)
        res.redirect('/ad/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/ad/details/' + req.params.id)

    }
})
module.exports = router