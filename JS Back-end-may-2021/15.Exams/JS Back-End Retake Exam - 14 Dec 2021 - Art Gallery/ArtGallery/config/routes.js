const authController = require('../controllers/authController')
const homeController = require('../controllers/homeController')
const galleryController = require('../controllers/galleryController')
const profileController = require('../controllers/profileController')
const errorController = require('../controllers/errorController')

module.exports = (app) => {
    app.use('/',homeController)
    app.use('/auth',authController)
    app.use('/gallery',galleryController)
    app.use('/profile',profileController)
    app.all('*',errorController)
}