const router = require('express').Router()
const postService = require('../services/post')
const {isUser} = require("../middlewares/guards");

router.get('/profile',isUser(),async(req,res) => {
    const userPosts = await postService.getPostsByAuthorId(req.user._id)
    res.render('authViews/my-posts',
        {userPosts,title: 'My Posts',userData: {...req.user}})
})


module.exports = router