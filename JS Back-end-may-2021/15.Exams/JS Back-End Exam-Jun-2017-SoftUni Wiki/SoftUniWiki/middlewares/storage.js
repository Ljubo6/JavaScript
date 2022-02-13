const articleService = require('../services/article')
module.exports = () => (req,res,next) => {

    //TODO import and decorate services
    req.storage ={
        ...articleService
    }
	next()
}