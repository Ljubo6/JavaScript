const authController = require('../controllers/authController')
const homeController = require('../controllers/homeController')
const tripController = require('../controllers/tripController')
const profileController = require('../controllers/profileController')
const notFoundController = require('../controllers/notFoundController')

module.exports = (app) => {
    app.use('/',homeController)
    app.use('/auth',authController)
    app.use('/trip',tripController)
    app.use('/profile',profileController)
    app.all('*',notFoundController)

}