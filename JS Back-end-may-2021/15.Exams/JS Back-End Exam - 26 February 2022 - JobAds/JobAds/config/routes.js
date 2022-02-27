const authController = require('../controllers/authController')
const homeController = require('../controllers/homeController')
const adController = require('../controllers/adController')
const searchController = require('../controllers/searchController')
const errorController = require('../controllers/errorController')

module.exports = (app) => {
    app.use('/',homeController)
    app.use('/auth',authController)
    app.use('/ad',adController)
    app.use('/search',searchController)
    app.all('*',errorController)
}