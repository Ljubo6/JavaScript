const router = require('express').Router()

router.get('/',async(req,res) => {
    let houses = await req.storage.getAllHouses()
    houses = houses.slice(-3)
    res.render('home/home',{houses,title:'Home Page'})
})

module.exports = router