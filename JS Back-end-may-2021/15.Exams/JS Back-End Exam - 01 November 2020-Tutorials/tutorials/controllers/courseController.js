const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isUser} = require("../middlewares/guards");
const{parseError} = require('../util/parsers')


router.get('/create',isUser(),(req,res) => {
    res.render('course/create',{title:'Create Page'})
})
router.post('/create',isUser(),
    body('title').isLength({min: 4}).withMessage('Title must be at least 4 characters length!').bail(),
    body('description').isLength({min:20 ,max:50}).withMessage('Description must be between 20 and 50 characters long!').bail(),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https!')
        }
        return true
    }),
    async (req, res) => {
        const {errors} = validationResult(req)
        try {
            if (errors.length > 0) {
                throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
            }
            const courseData = {
                title: req.body.title.trim(),
                description: req.body.description.trim(),
                imageUrl: req.body.imageUrl.trim(),
                duration: req.body.duration.trim(),
                author: req.user._id
            }
            await req.storage.createCourse(courseData)

            res.redirect('/')

        } catch (err) {
            console.log(err.message)
            const ctx = {
                errors: parseError(err),
                courseData: {
                    title: req.body.title.trim(),
                    description: req.body.description.trim(),
                    imageUrl: req.body.imageUrl.trim(),
                    duration: req.body.duration.trim()
                },
                title: 'Create Page'
            }
            res.render('course/create', ctx)
        }
    })
router.get('/details/:id',async(req,res) => {
    try{
        const course = await req.storage.getCourseById(req.params.id)
       course.hasUser = Boolean(req.user)
       course.isAuthor = req.user && req.user._id == course.author
       course.enroll = req.user && course.usersEnrolled.find(c =>  c._id == req.user._id)


        res.render('course/details',{course})
    }catch (err) {
        console.log(err.message)
        res.redirect('/404')
    }

})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const course = await req.storage.getCourseById(req.params.id)

        if(course.author != req.user._id){
            throw new Error('Cannot edit course you haven\'t created')
        }

        res.render('course/edit',{course})
    }catch (err) {
        console.log(err.message)
        res.redirect('/play/details/' + req.params.id)
    }
})
router.post('/edit/:id',isUser(),async(req,res) => {
    try{
        const course = await req.storage.getCourseById(req.params.id)

        if(course.author != req.user._id){
            throw new Error('Cannot edit course you haven\'t created')
        }

        await req.storage.editCourse(req.params.id,req.body)

        res.redirect('/')

    }catch (err) {
        const ctx = {
            errors: parseError(err),
            course:{
                _id:req.params.id,
                title:req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                duration: req.body.duration,

            }
        }
        res.render('course/edit',ctx)
    }

})


router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const course = await req.storage.getCourseById(req.params.id)
        if(course.author != req.user._id){
            throw new Error('Cannot delete course you haven\'t created')
        }

        await req.storage.deleteCourse(req.params.id)
        res.redirect('/')
    }catch (err) {
        console.log(err.message)
        res.redirect('/course/details/' + req.params.id)

    }
})
router.get('/enroll/:id',isUser(),async(req,res) => {
    try{
        const course = await req.storage.getCourseById(req.params.id)
        if(course.author == req.user._id){
            throw new Error('Cannot enroll your own course')
        }

        await req.storage.enrollCourse(req.params.id,req.user._id)
        res.redirect('/course/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/course/details/' + req.params.id)

    }
})

module.exports = router