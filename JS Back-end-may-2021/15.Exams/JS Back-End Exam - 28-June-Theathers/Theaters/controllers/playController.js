const {isUser} = require("../middlewares/guards");
const {validationResult} = require("express-validator");
const {parseError} = require("../util/parsers");
const router = require('express').Router()
router.get('/create',isUser(),(req,res) => {
    res.render('play/create',{title:'Create Page'})
})
router.post('/create'
    ,isUser(),
    async(req,res) => {
        const {errors} = validationResult(req)
        try {
            if (errors.length > 0) {
                throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
            }
            const playData = {
                title:req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                isPublic:Boolean(req.body.isPublic),
                owner: req.user._id
            }
            await req.storage.createPlay(playData)

            res.redirect('/')

        } catch (err) {
            console.log(err.message)
            const ctx = {
                errors: parseError(err),
                playData: {
                    title:req.body.title,
                    description: req.body.description,
                    imageUrl: req.body.imageUrl,
                    isPublic:Boolean(req.body.isPublic)
                },
                title: 'Create Page'
            }
            res.render('play/create', ctx)
        }
    })
router.get('/details/:id',isUser(),async(req,res) => {
    try{
        const play = await req.storage.getPlayById(req.params.id)

        play.isOwner = req.user && req.user._id == play.owner._id
        play.isUser = Boolean(req.user)
        play.isLiked = req.user && play.usersLiked.find(x => x._id == req.user._id)
        res.render('play/details',{play,title:'Details Page'})
    }catch (err) {
        res.render('404')
    }
})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const play = await req.storage.getPlayById(req.params.id)
        if(play.owner._id != req.user._id) {
            throw new Error('Cannot edit play,you haven\'t created')
        }
        res.render('play/edit',{play,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/play/details/' + req.params.id)
    }

})
router.post('/edit/:id',isUser(),async(req,res) => {
    try{
        const play = await req.storage.getPlayById(req.params.id)

        if(play.owner != req.user._id){
            throw new Error('Cannot edit play you haven\'t created')
        }

        await req.storage.editPlay(req.params.id,req.body)

        res.redirect('/')

    }catch (err) {
        const ctx = {
            errors: parseError(err),
            play:{
                _id:req.params.id,
                title:req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                isPublic: Boolean(req.body.isPublic)
            }
        }
        res.render('play/edit',ctx)
    }

})
router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const play = await req.storage.getPlayById(req.params.id)
        if(play.owner._id != req.user._id) {
            throw new Error('Cannot delete play,you haven\'t created!')
        }
        await req.storage.deletePlay(req.params.id)
        res.redirect('/')

    }catch (err) {
        console.log(err.message)
        res.redirect('/play/details/' + req.params.id)
    }
})
router.get('/like/:id',isUser(),async(req,res) => {
    try{
        const play = await req.storage.getPlayById(req.params.id)
        if(play.owner._id == req.user._id){
            throw new Error ('Cannot like your post!')
        }

        await req.storage.likePlay(req.params.id,req.user._id)
        res.redirect('/play/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/play/details/' + req.params.id)
    }
})

module.exports = router