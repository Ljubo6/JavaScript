const authController = require('../controllers/authController')
const homeController = require('../controllers/homeController')
const housingController = require('../controllers/housingController')
const errorController = require('../controllers/errorController')

module.exports = (app) => {
    app.use('/',homeController)
    app.use('/auth',authController)
    app.use('/housing',housingController)
    app.all('*', errorController);
}