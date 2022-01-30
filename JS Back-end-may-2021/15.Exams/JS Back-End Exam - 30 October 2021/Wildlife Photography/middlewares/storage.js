const postService = require('../services/post')
module.exports = () => (req,res,next) => {

    //TODO import and decorate services
    req.storage ={
        ...postService
    }
	next()
}