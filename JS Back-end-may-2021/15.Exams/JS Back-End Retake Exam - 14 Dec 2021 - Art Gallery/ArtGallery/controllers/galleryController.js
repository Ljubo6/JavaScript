const {isUser, isGuest} = require("../middlewares/guards");
const {body,validationResult} = require('express-validator')
const {parseError} = require("../util/parsers");
const router = require('express').Router()

router.get('/gallery',isGuest(),async(req,res) => {
    const publications = await req.storage.getAllPublications()
    res.render('gallery/gallery',{publications,title:'Catalog Page'})
})
router.get('/create',isUser(),(req,res) => {
    res.render('gallery/create',{title: 'Create Page'})
})
router.post('/create',
    isUser(),
    body('title').isLength({min:6}).withMessage('Title must be at least 6 characters length!'),
    body('paintingTechnique').isLength({max:15}).withMessage('Painting technique  must be at most 15 characters length!'),
    body('certificate').isIn(['Yes','No']).withMessage('Certificate of authenticity must be "Yes" or "No"!'),
    body('imageUrl').matches(RegExp(/^https?/)).withMessage('The url must starts with http or https'),
    async(req,res) => {
        const {errors} = validationResult(req)
        try{
            if(errors.length > 0){
                throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
            }
            const publicationData = {
                title: req.body.title.trim(),
                paintingTechnique: req.body.paintingTechnique.trim(),
                imageUrl: req.body.imageUrl.trim(),
                certificate: req.body.certificate.trim(),
                author: req.user._id
            }
            await req.storage.createPublication(publicationData)

            res.redirect('/gallery/gallery')

        }catch (err) {
            console.log(err.message)
            const ctx = {
                errors: parseError(err),
                publicationData:{
                    title: req.body.title.trim(),
                    paintingTechnique: req.body.paintingTechnique.trim(),
                    imageUrl: req.body.imageUrl.trim(),
                    certificate: req.body.certificate.trim()
                },
                title: 'Create Page'
            }
            res.render('gallery/create',ctx)
        }
    })
router.get('/details/:id',async(req,res) => {
    try{
        const publication = await req.storage.getPublicationById(req.params.id)
        publication.hasUser = Boolean(req.user)
        publication.isAuthor = req.user && req.user._id == publication.author._id
        publication.isShared = req.user && publication.usersShared.find(x =>  x._id == req.user._id)

        res.render('gallery/details',{publication,title:'Details Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/404')
    }

})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const publication = await req.storage.getPublicationById(req.params.id)

        if(publication.author._id != req.user._id){
            throw new Error('Cannot edit publication you haven\'t created')
        }

        res.render('gallery/edit',{publication,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/gallery/details/' + req.params.id)
    }
})
router.post('/edit/:id',
    isUser(),
    body('title').isLength({min:6}).withMessage('Title must be at least 6 characters length!'),
    body('paintingTechnique').isLength({max:15}).withMessage('Painting technique  must be at most 15 characters length!'),
    body('certificate').isIn(['Yes','No']).withMessage('Certificate of authenticity must be "Yes" or "No"!'),
    body('imageUrl').matches(RegExp(/^https?/)).withMessage('The url must starts with http or https'),
    async(req,res) => {
    const {errors} = validationResult(req)

    try{
        if(errors.length > 0){
            throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
        }
        const publication = await req.storage.getPublicationById(req.params.id)

        if(publication.author._id != req.user._id){
            throw new Error('Cannot edit post you haven\'t created')
        }

        await req.storage.editPublication(req.params.id,req.body)

        res.redirect('/gallery/details/' + req.params.id)

    }catch (err) {
        const ctx = {
            errors: parseError(err),
            publication:{
                _id:req.params.id,
                title: req.body.title.trim(),
                paintingTechnique: req.body.paintingTechnique.trim(),
                imageUrl: req.body.imageUrl.trim(),
                certificate: req.body.certificate.trim()
            },
            title:'Edit Page'
        }
        res.render('gallery/edit',ctx)
    }

})


router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const publication = await req.storage.getPublicationById(req.params.id)
        if(publication.author._id != req.user._id){
            throw new Error('Cannot delete publication you haven\'t created')
        }

        await req.storage.deletePublication(req.params.id)
        res.redirect('/')
    }catch (err) {
        console.log(err.message)
        res.redirect('/gallery/details/' + req.params.id)

    }
})
router.get('/share/:id',isUser(),async(req,res) => {
    try{
        const publication = await req.storage.getPublicationById(req.params.id)
        if(publication.author._id == req.user._id){
            throw new Error('Cannot share your own course')
        }

        await req.storage.sharePublication(req.params.id,req.user._id)
        res.redirect('/gallery/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/gallery/details/' + req.params.id)

    }
})
module.exports = router