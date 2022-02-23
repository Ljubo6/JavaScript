const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isGuest} = require("../middlewares/guards");

router.get('/register',isGuest(),(req,res) => {
    res.render('auth/register',{title:'Register Page'})
})
router.post(
    '/register',
    isGuest(),
    body('name').matches(/^[a-zA-Z]+ [a-zA-Z]+$/,'i').withMessage('Use folowing format "firstname lastname"'),
    body('username').isLength({min:5}).withMessage('Username must be at least 5 characters long'),
    body('password').isLength({min:4}).withMessage('Password must be at least 4 characters long'),
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

             await req.auth.register(req.body.name,req.body.username,req.body.password)

            res.redirect('/') //TODO change redirect location
        }catch(err){
            console.log(err.message)
            const ctx = {
                errors:err.message.split('\n'),
                userData:{
                    name:req.body.name,
                    username:req.body.username
                },
                title:'Register Page'
            }
            res.render('auth/register',ctx)
        }


    }
)
router.get('/login',isGuest(),(req,res) => {
    res.render('auth/login',{title:'Login Page'})
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
                username:req.body.username
            },
            title:'Login Page'
        }
        res.render('auth/login',ctx)
    }

})
router.get('/logout',(req,res) => {
    req.auth.logout()
    res.redirect('/')
})
module.exports = router