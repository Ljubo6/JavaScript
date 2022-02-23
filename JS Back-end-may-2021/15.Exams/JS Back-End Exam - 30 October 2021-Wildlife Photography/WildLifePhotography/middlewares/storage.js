const postService = require('../services/post')
const userService = require('../services/user')
module.exports = () => (req,res,next) => {

    req.storage ={
        ...postService,
        ...userService
    }
	next()
}