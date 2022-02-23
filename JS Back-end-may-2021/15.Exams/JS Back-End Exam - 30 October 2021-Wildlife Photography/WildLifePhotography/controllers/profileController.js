const {isUser} = require("../middlewares/guards");
const router = require('express').Router()
router.get('/profile',isUser(),async(req,res) => {
    const profile = await req.storage.getPostByAuthorId(req.user._id)
    res.render('profile/profile',{profile,title:'Profile Page'})
})

module.exports = router