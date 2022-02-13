const authController = require('../controllers/authController')
const homeController = require('../controllers/homeController')
const articleController = require('../controllers/articleController')

module.exports = (app) => {
    app.use('/',homeController)
    app.use('/auth',authController)
    app.use('/article',articleController)
}