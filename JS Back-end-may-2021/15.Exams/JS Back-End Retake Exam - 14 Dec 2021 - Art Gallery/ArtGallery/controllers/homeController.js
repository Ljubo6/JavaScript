const router = require('express').Router()

router.get('/',async(req,res) => {
    const publications = await req.storage.getAllPublications()
    res.render('home/home',{publications,title:'Home Page'})
})
module.exports = router