const {isUser} = require("../middlewares/guards");
const router = require('express').Router()
router.get('/',async(req,res) => {
    const bookings = await req.storage.getAllBookings()
    res.render('home/home',{bookings,title:'Home Page'})
})
module.exports = router