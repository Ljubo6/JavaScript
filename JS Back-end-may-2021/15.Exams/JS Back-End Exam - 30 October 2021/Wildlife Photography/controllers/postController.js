const router = require('express').Router()
const {body, validationResult} = require('express-validator')
const {isUser} = require("../middlewares/guards");
const {parseError} = require("../util/parsers");

router.get('/create',isUser(), (req, res) => {
    res.render('post/create', {title: 'Create Page'})
})
router.post('/create',isUser(),
    body('title').isLength({min: 6}).withMessage('Post title must be at least 6 characters!').bail(),
    body('keyword').isLength({min: 6}).withMessage('Keyword must be at least 6 characters!').bail(),
    body('location').isLength({max: 15}).withMessage('Location must be at maximum 15 characters!').bail(),
    body('date').isLength({min: 10, max: 10}).withMessage('Date must be exactly 10 characters!').bail(),
    body('description').isLength({min: 8}).withMessage('Description can not be less than 8 symbols!').bail(),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),

    async (req, res) => {
        const {errors} = validationResult(req);

        try {
            if(errors.length > 0){
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
            }
            const postData = {
                title: req.body.title.trim(),
                keyword: req.body.keyword.trim(),
                location: req.body.location.trim(),
                description: req.body.description.trim(),
                date: req.body.date.trim(),
                imageUrl: req.body.imageUrl.trim(),
                author: req.user._id
            }
            await req.storage.createPost(postData)

            res.redirect('/post/catalog')
        } catch (err) {
            console.log(err.message)
            const ctx = {
                errors: parseError(err),
                postData: {
                    title: req.body.title.trim(),
                    keyword: req.body.keyword.trim(),
                    location: req.body.location.trim(),
                    description: req.body.description.trim(),
                    date: req.body.date.trim(),
                    imageUrl: req.body.imageUrl.trim()
                },
                title:'Create Page'
            }
            res.render('post/create', ctx)
        }


    })
router.get('/catalog',async(req,res) => {
    const posts = await req.storage.getAllPosts()
    res.render('post/all-posts',{posts,title:'Catalog Page'})
})


router.get('/details/:id',async(req,res) => {

    try{
        const post = await req.storage.getPostById(req.params.id)

        post.isAuthor = req.user && req.user._id == post.author._id
        post.isUser = Boolean(req.user)
        post.isVoted = req.user && post.voters.find(v => v._id == req.user._id)
        post.emailVoters = post.voters.map(v => v.email).join(', ')

        console.log(post.emailVoters)
        res.render('post/details',{post,title:'Details Page'})
    }catch (err) {
        res.render('404')
    }
})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)
        if(post.author._id != req.user._id) {
            throw new Error('Cannot edit post,you haven\'t created')
        }

        res.render('post/edit',{post,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/post/details/' + req.params.id)
    }
})
router.post('/edit/:id',isUser(),
body('title').isLength({min: 6}).withMessage('Post title must be at least 6 characters!').bail(),
    body('keyword').isLength({min: 6}).withMessage('Keyword must be at least 6 characters!').bail(),
    body('location').isLength({max: 15}).withMessage('Location must be at maximum 15 characters!').bail(),
    body('date').isLength({min: 10, max: 10}).withMessage('Date must be exactly 10 characters!').bail(),
    body('description').isLength({min: 8}).withMessage('Description can not be less than 8 symbols!').bail(),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
    async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)
        if(post.author._id != req.user._id) {
            throw new Error('Cannot edit post,you haven\'t created')
        }
        await req.storage.editPost(req.params.id,req.body)
        res.redirect('/post/details/' + req.params.id)
    }catch (err) {
        const ctx = {
            errors: parseError(err),
            post:{
                _id:req.params.id,
                title:req.body.title,
                keyword:req.body.keyword,
                location:req.body.location,
                date:req.body.date,
                imageUrl:req.body.imageUrl,
                description:req.body.description

            }
        }
        res.render('post/edit',ctx)

    }
})
router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)
        if(post.author._id != req.user._id) {
            throw new Error('Cannot delete post,you haven\'t created!')
        }
        await req.storage.deletePost(req.params.id)
        res.redirect('/post/catalog')

    }catch (err) {
        console.log(err.message)
        res.redirect('/post/details/' + req.params.id)
    }
})
router.get('/like/:id',isUser(),async(req,res) => {
    try{
        const post = await req.storage.getPostById(req.params.id)
        if(post.author._id == req.user._id){
            throw new Error ('Cannot like your post!')
        }
        console.log(post)
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
            throw new Error ('Cannot dislike your post!')
        }

        await req.storage.dislikePost(req.params.id,req.user._id)
        res.redirect('/post/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/post/details/' + req.params.id)
    }
})

module.exports = router