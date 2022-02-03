const router = require('express').Router()

router.get('/',async (req,res) => {
    let housings = await req.storage.getAllHousings()
    housings = housings.slice(-3)
    res.render('home/home',{housings,title:'Home Page'})
})

module.exports = router