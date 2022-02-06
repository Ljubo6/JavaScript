const router = require('express').Router()
const {isUser} = require("../middlewares/guards")

router.get('/profile',isUser(),async(req,res) =>{
    const user = await req.storage.getUserHistoryById(req.user._id)
    user.count = user.history.length
    user.title = 'Profile Page'
    res.render('profile/profile',user)
})
module.exports = router