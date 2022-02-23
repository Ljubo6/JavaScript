const {isUser} = require('../middlewares/guards')
const {body,validationResult} = require('express-validator')
const {parseError} = require('../util/parsers')
const router = require('express').Router()
router.get('/catalog',async(req,res) => {
    const posts = await req.storage.getAllPosts()
    res.render('post/catalog',{posts,title:'Catalog Page'})
})
router.get('/create',isUser(),(req,res) => {
    res.render('post/create',{title:'Create Page'})
})
router.post('/create',
    isUser(),
    body('title').isLength({min:6}).withMessage('Title must be at least 6 characters length!'),
    body('keyword').isLength({min:6}).withMessage('Keyword must be at least 6 characters length!'),
    body('location').isLength({max:15}).withMessage('Location must be at most 15 characters length!'),
    body('date').isLength({min:10,max:10}).withMessage('Date must be exactly 10 characters length!'),
    body('description').isLength({min:8}).withMessage('Description must be at least 10 characters length!'),
    body('imageUrl').matches(RegExp(/^https?/)).withMessage('The url must starts with http or https'),
    async(req,res) => {
        const {errors} = validationResult(req)
        try{
            if(errors.length > 0){
                throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
            }
            const postData = {
                title: req.body.title.trim(),
                keyword: req.body.keyword.trim(),
                location: req.body.location.trim(),
                date: req.body.date.trim(),
                imageUrl: req.body.imageUrl.trim(),
                description: req.body.description.trim(),
                author: req.user._id
            }
            await req.storage.createPost(postData)

            res.redirect('/post/catalog')

        }catch (err) {
            console.log(err.message)
            const ctx = {
                errors: parseError(err),
                postData:{
                    title: req.body.title.trim(),
                    keyword: req.body.keyword.trim(),
                    location: req.body.location.trim(),
                    date: req.body.date.trim(),
                    imageUrl: req.body.imageUrl.trim(),
                    description: req.body.description.trim(),
                },
                title: 'Create Page'
            }
            res.render('post/create',ctx)
        }
})
router.get('/details/:id',async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)
        post.hasUser = Boolean(req.user)
        post.isAuthor = req.user && req.user._id == post.author._id
        post.isVoted = req.user && post.votes.find(v =>  v._id == req.user._id)
        post.peopleVoted = post.votes.map(x => x.email).join(' ')


        res.render('post/details',{post,title:'Details Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/404')
    }

})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)

        if(post.author != req.user._id){
            throw new Error('Cannot edit post you haven\'t created')
        }

        res.render('post/edit',{post,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/post/details/' + req.params.id)
    }
})
router.post('/edit/:id',isUser(),async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)

        if(post.author._id != req.user._id){
            throw new Error('Cannot edit post you haven\'t created')
        }

        await req.storage.editPost(req.params.id,req.body)

        res.redirect('/post/details/' + req.params.id)

    }catch (err) {
        const ctx = {
            errors: parseError(err),
            post:{
                _id:req.params.id,
                title: req.body.title.trim(),
                keyword: req.body.keyword.trim(),
                location: req.body.location.trim(),
                date: req.body.date.trim(),
                imageUrl: req.body.imageUrl.trim(),
                description: req.body.description.trim(),
            },
            title:'Edit Page'
        }
        res.render('post/edit',ctx)
    }

})


router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)
        if(post.author._id != req.user._id){
            throw new Error('Cannot delete post you haven\'t created')
        }

        await req.storage.deletePost(req.params.id)
        res.redirect('/')
    }catch (err) {
        console.log(err.message)
        res.redirect('/post/details/' + req.params.id)

    }
})
router.get('/like/:id',isUser(),async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)
        if(post.author._id == req.user._id){
            throw new Error('Cannot like your own course')
        }

        await req.storage.likePost(req.params.id,req.user._id)
        res.redirect('/post/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/post/details/' + req.params.id)

    }
})
router.get('/dislike/:id',isUser(),async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)
        if(post.author._id == req.user._id){
            throw new Error('Cannot dislike your own course')
        }

        await req.storage.dislikePost(req.params.id,req.user._id)
        res.redirect('/post/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/post/details/' + req.params.id)

    }
})

module.exports = router