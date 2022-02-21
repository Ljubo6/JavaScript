const hotelService = require('../services/hotel')
const userService = require('../services/user')
module.exports = () => (req,res,next) => {

    req.storage ={
        ...hotelService,
        ...userService
    }
	next()
}