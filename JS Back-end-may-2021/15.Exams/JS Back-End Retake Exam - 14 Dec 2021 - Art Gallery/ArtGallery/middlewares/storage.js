const galleryService = require('../services/gallery')
module.exports = () => (req,res,next) => {

    //TODO import and decorate services
    req.storage ={
        ...galleryService
    }
	next()
}