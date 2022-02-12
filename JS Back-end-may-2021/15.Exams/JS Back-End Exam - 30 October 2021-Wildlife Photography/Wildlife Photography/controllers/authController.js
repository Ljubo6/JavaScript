const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isGuest} = require("../middlewares/guards");

router.get('/register',isGuest(),(req,res) => {
    res.render('authViews/register',{title: 'Register Page'})
})
router.post(
    '/register',
    isGuest(),
    body('firstName').isLength({min:3}).withMessage('First name must be at least 3 characters long').bail()
        .isAlphanumeric().withMessage('First name must contain only English letters and digits'),
    body('lastName').isLength({min:5}).withMessage('Last name must be at least 5 characters long').bail()
        .isAlphanumeric().withMessage('Last name must contain only English letters and digits'),
    body('email').isEmail().withMessage('Please enter a valid email!'),
    body('password').isLength({min:4}).withMessage('Password must be at least 4 characters long').bail(),
    body('rePass').custom((value,{req}) => {
        if (value != req.body.password){
            throw new Error("Passwords don\'t match")
        }
        return true
    }),
     async(req,res) => {

        const {errors} = validationResult(req)
         const userData = {
             firstName: req.body.firstName.trim(),
             lastName: req.body.lastName.trim(),
             email: req.body.email.trim(),
             password: req.body.password.trim()
         }

        try{

            if (errors.length > 0){
                //TODO improve error messagess
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'))
                // console.log(errors)
                // throw new Error('Validation error')
            }

             await req.auth.register(userData)

            res.redirect('/') //TODO change redirect location
        }catch(err){
            console.log(err.message)
            const ctx = {
                errors:err.message.split('\n'),
                userData
            }
            res.render('authViews/register',ctx)
        }


    }
)
router.get('/login',isGuest(),(req,res) => {
    res.render('authViews/login',{title: 'Login Page'})
})
router.post('/login',isGuest(),async (req,res) => {
    try{
        await req.auth.login(req.body.email,req.body.password)
        res.redirect('/')
    }catch(err){
        console.log(err.message)
        console.log(err.type)
        let errors = [err.message]
        if (err.type == 'credential'){
            errors = ['Incorrect email or password']
        }
        const ctx = {
            errors,
            userData:{
                email:req.body.email
            }
        }
        res.render('authViews/login',ctx)
    }

})
router.get('/logout',(req,res) => {
    req.auth.logout()
    res.redirect('/')
})
module.exports = router