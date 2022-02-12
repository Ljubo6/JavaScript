const authController = require('../controllers/authController')
const postController = require('../controllers/postController')
const homeController = require('../controllers/homeController')
const profileController = require('../controllers/profileController')

module.exports = (app) => {
    app.use('/',homeController)
    app.use('/auth',authController)
    app.use('/user',profileController)
    app.use('/post',postController)
}