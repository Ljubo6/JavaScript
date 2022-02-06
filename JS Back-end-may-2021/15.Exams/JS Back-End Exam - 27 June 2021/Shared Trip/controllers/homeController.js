const router = require('express').Router()

const {isGuest} = require("../middlewares/guards")

router.get('/',(req,res) =>{
    res.render('home/home',{title:'Home Page'})
})
module.exports = router