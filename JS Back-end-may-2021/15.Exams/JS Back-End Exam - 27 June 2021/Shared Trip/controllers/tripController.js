const router = require('express').Router()
const {body,validationResult} = require('express-validator')
const {isGuest,isUser} = require("../middlewares/guards")
const {parseError} = require('../util/parsers')

router.get('/shared',async(req,res) =>{
    const trips = await req.storage.getAllTrips()
    res.render('trip/shared',{trips,title:'Catalog Page'})
})

router.get('/create',isUser(),(req,res) =>{
    res.render('trip/create',{title:'Create Page'})
})
router.post('/create',
    isUser(),
    body('startPoint').isLength({min:4}).withMessage('Start point must be at least 4 characters long!').bail(),
    body('endPoint').isLength({min:4}).withMessage('End point must be at least 4 characters long!').bail(),
    body('seats').isInt({min:0,max:4}).withMessage('The seats must be a positive number between 0 and 4!').bail(),
    body('description').isLength({min:10}).withMessage('Description must be at least 10 characters long!').bail(),
    body('carBrand').isLength({min:4}).withMessage('Car brand must be at least 4 characters long!').bail(),
    body('price').isInt({min:1,max:50}).withMessage('The price must be a positive number between 0 and 4!').bail(),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
    async (req,res) =>{

        const {errors} = validationResult(req);

        try {
            if(errors.length > 0){
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
            }
            const tripData = {
                startPoint: req.body.startPoint.trim(),
                endPoint: req.body.endPoint.trim(),
                date: req.body.date,
                time: req.body.time.trim(),
                imageUrl: req.body.imageUrl.trim(),
                carBrand: req.body.carBrand.trim(),
                seats: req.body.seats.trim(),
                price: req.body.price.trim(),
                description: req.body.description.trim(),
                creator: req.user._id
            }
            await req.storage.createTrip(tripData)

            res.redirect('/trip/shared')
        } catch (err) {
            console.log(err.message)
            const ctx = {
                errors: parseError(err),
                tripData: {
                    startPoint: req.body.startPoint.trim(),
                    endPoint: req.body.endPoint.trim(),
                    date: req.body.date,
                    time: req.body.time.trim(),
                    imageUrl: req.body.imageUrl.trim(),
                    carBrand: req.body.carBrand.trim(),
                    seats: req.body.seats.trim(),
                    price: req.body.price.trim(),
                    description: req.body.description.trim(),
                },
                title:'Create Page'
            }
            res.render('trip/create', ctx)
        }
})
router.get('/details/:id',async(req,res) => {

    try{
        const trip = await req.storage.getTripById(req.params.id)

        trip.isCreator = req.user && req.user._id == trip.creator._id
        trip.isUser = Boolean(req.user)

        trip.hasSeats = trip.seats

        trip.isBuddy = req.user && trip.buddies.find(b => b._id == req.user._id)
        trip.emailBuddies = trip.buddies.map(b => b.email).join(', ')


        res.render('trip/details',{trip,title:'Details Page'})
    }catch (err) {
        res.redirect('/404')
    }
})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const trip = await req.storage.getTripById(req.params.id)
        if(trip.creator._id != req.user._id) {
            throw new Error('Cannot edit trip,you haven\'t created')
        }

        res.render('trip/edit',{trip,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/trip/details/' + req.params.id)
    }
})
router.post('/edit/:id',isUser(),
    body('startPoint').isLength({min:4}).withMessage('Start point must be at least 4 characters long!').bail(),
    body('endPoint').isLength({min:4}).withMessage('End point must be at least 4 characters long!').bail(),
    body('seats').isInt({min:0,max:4}).withMessage('The seats must be a positive number between 0 and 4!').bail(),
    body('description').isLength({min:10}).withMessage('Description must be at least 10 characters long!').bail(),
    body('carBrand').isLength({min:4}).withMessage('Car brand must be at least 4 characters long!').bail(),
    body('price').isInt({min:1,max:50}).withMessage('The price must be a positive number between 0 and 4!').bail(),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
    async(req,res) => {
        try{
            const trip = await req.storage.getTripById(req.params.id)
            if(trip.creator._id != req.user._id) {
                throw new Error('Cannot edit trip,you haven\'t created')
            }
            await req.storage.editTrip(req.params.id,req.body)
            res.redirect('/trip/details/' + req.params.id)
        }catch (err) {
            const ctx = {
                errors: parseError(err),
                trip:{
                    _id:req.params.id,
                    startPoint:req.body.startPoint,
                    endPoint:req.body.endPoint,
                    date:req.body.date,
                    time:req.body.time,
                    imageUrl:req.body.imageUrl,
                    carBrand:req.body.carBrand,
                    seats:req.body.seats,
                    price:req.body.price,
                    description:req.body.description

                }
            }
            res.render('trip/edit',ctx)

        }
    })
router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const trip = await req.storage.getTripById(req.params.id)
        if(trip.creator._id != req.user._id) {
            throw new Error('Cannot delete trip,you haven\'t created!')
        }
        await req.storage.deleteTrip(req.params.id)
        res.redirect('/trip/shared')

    }catch (err) {
        console.log(err.message)
        res.redirect('/trip/details/' + req.params.id)
    }
})
router.get('/join/:id',isUser(),async(req,res) => {
    try{
        const trip = await req.storage.getTripById(req.params.id)
        if(trip.creator._id == req.user._id){
            throw new Error ('Cannot join to your trip!')
        }
        await req.storage.joinTrip(req.params.id,req.user._id)
        res.redirect('/trip/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/trip/details/' + req.params.id)
    }
})
module.exports = router