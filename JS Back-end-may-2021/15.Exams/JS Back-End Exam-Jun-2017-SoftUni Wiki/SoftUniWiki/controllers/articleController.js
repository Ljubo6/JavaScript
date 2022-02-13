const router = require('express').Router()
const {isUser} = require("../middlewares/guards");
const {body,validationResult} = require('express-validator')
const {parseError} = require("../util/parsers");

router.get('/create',isUser(),(req,res) => {
    res.render('article/create',{title:'Create Page'})
})
router.post('/create',isUser(),
    body('title').isLength({min: 4}).withMessage('Title must be at least 4 characters length!').bail(),
    body('description').isLength({min:20}).withMessage('Article description should be at least 20 characters long...').bail(),
async (req, res) => {
    const {errors} = validationResult(req)
    try {
        if (errors.length > 0) {
            throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
        }
        const articleData = {
            title: req.body.title,
            description: req.body.description,
            author: req.user._id
        }
        await req.storage.createArticle(articleData)

        res.redirect('/')

    } catch (err) {
        console.log(err.message)
        const ctx = {
            errors: parseError(err),
            articleData: {
                title: req.body.title,
                description: req.body.description
            },
            title: 'Create Page'
        }
        res.render('article/create', ctx)
    }
})
router.get('/all',async(req,res) => {
    const search = req.query.search
    let articles = await req.storage.getAllArticles(search)

    if(search){
        res.render('home/search',{articles,title:'Search Page',search:search})
    }else{
        res.render('article/all',{articles,title:'All Page'})
    }

})
router.get('/details/:id',async(req,res) => {
    try{
        const article = await req.storage.getArticleById(req.params.id)
        article.hasUser = Boolean(req.user)
        article.isAuthor = req.user && req.user._id == article.author

        console.log(article.isAuthor)
        res.render('article/article',{article,title:'Details Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/404')
    }

})
router.get('/edit/:id',async(req,res) => {
    try{
        const article = await req.storage.getArticleById(req.params.id)

        res.render('article/edit',{article,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/article/details/' + req.params.id)
    }
})
router.post('/edit/:id',
body('description').isLength({min:20}).withMessage('Article description should be at least 20 characters long...'),
    async(req,res) => {
    try{
        await req.storage.editArticle(req.params.id,req.body)

        res.redirect('/')

    }catch (err) {
        const ctx = {
            errors: parseError(err),
            article:{
                _id:req.params.id,
                description: req.body.description

            }
        }
        res.render('article/edit',ctx)
    }

})
router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const article = await req.storage.getArticleById(req.params.id)
        if(article.author != req.user._id){
            throw new Error('Cannot delete article you haven\'t created')
        }

        await req.storage.deleteArticle(req.params.id)
        res.redirect('/')
    }catch (err) {
        console.log(err.message)
        res.redirect('/article/details/' + req.params.id)

    }
})
module.exports = router