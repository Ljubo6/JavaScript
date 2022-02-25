const {isUser} = require("../middlewares/guards");
const router = require('express').Router()
const userService = require('../services/user')

router.get('/profile',isUser(),async(req,res) => {
    const user = await userService.findUserById(req.user._id)

    const profile = await req.storage.getPublicationByAuthorId(req.user._id)
    const sharePostsByUser = await req.storage.getAllSharedPublicationsByUserId(req.user._id)

    const titles = profile.map(x => x.title).join(', ')
    const shared = sharePostsByUser.map(x => x.title).join(', ')

    res.render('profile/profile',{user,titles,shared,title:'Profile Page'})
})
module.exports = router