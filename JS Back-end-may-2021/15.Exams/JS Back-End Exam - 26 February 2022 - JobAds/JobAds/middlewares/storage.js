const adService = require('../services/ad')
const userService = require('../services/user')
module.exports = () => (req,res,next) => {

    req.storage ={
        ...adService,
        ...userService
    }
	next()
}