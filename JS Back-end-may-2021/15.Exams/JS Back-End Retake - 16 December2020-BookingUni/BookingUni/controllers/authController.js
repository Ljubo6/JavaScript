const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isGuest} = require("../middlewares/guards");

router.get('/register',isGuest(),(req,res) => {
    res.render('user/register',{title:'Register Page'})
})
router.post(
    '/register',
    isGuest(),
    body('email').isEmail().withMessage('Please enter a valid email!').bail()
        .matches(/[a-zA-Z0-9]/).withMessage('Email must contain only English letters and digits'),
    body('username').isLength({min:2}).withMessage('Username must be at least 2 characters long!'),
    body('password').isLength({min:5}).withMessage('Password must be at least 5 characters long').bail()
        .isAlphanumeric().withMessage('Password must contain only English letters and digits'),
    body('rePass').custom((value,{req}) => {
        if (value != req.body.password){
            throw new Error("Passwords don\'t match")
        }
        return true
    }),
     async(req,res) => {

        const {errors} = validationResult(req)

        try{
            if (errors.length > 0){
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'))
            }
             await req.auth.register(req.body.email,req.body.username,req.body.password)

            res.redirect('/')
        }catch(err){
            console.log(err.message)
            const ctx = {
                errors:err.message.split('\n'),
                userData:{
                    email:req.body.email,
                    username:req.body.username,
                    title:'Register Page'
                }
            }
            res.render('user/register',ctx)
        }
    }
)
router.get('/login',isGuest(),(req,res) => {
    res.render('user/login',{title:'Login Page'})
})
router.post('/login',isGuest(),async (req,res) => {
    try{
        await req.auth.login(req.body.username,req.body.password)
        res.redirect('/')
    }catch(err){
        console.log(err.message)
        console.log(err.type)
        let errors = [err.message]
        if (err.type == 'credential'){
            errors = ['Incorrect username or password']
        }
        const ctx = {
            errors,
            userData:{
                username:req.body.username,
                title: 'Login Page'
            }
        }
        res.render('user/login',ctx)
    }

})
router.get('/logout',(req,res) => {
    req.auth.logout()
    res.redirect('/')
})
module.exports = router