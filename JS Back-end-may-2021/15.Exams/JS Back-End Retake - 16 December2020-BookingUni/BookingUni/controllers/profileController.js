const {isUser} = require("../middlewares/guards");
const router = require('express').Router()
router.get('/profile',isUser(),async(req,res) => {

    const user = await req.storage.getUserBookedById(req.user._id)
    res.render('user/profile',{user,title:'Profile Page'})
})
module.exports = router