const router = require('express').Router()
router.get('/',async(req,res) => {

    res.render('home/home',{title:'Home Page'})
})

module.exports = router