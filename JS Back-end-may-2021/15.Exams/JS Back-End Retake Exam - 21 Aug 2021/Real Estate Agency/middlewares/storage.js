const housingService = require('../services/housing')
module.exports = () => (req,res,next) => {

    //TODO import and decorate services
    req.storage = {
        ...housingService
    }
	next()
}