const router = require('express').Router()


router.get('/',async(req,res) => {

    let articles = await req.storage.getAllArticles()

    articles = articles.map(a => ({...a,description: a.description.split(' ').slice(0, 50).join(' ') + '...'})).slice(-3)
    res.render('home/index',{articles,title: 'Main Page'})
})

module.exports = router