const {isUser} = require("../middlewares/guards");
const {body, validationResult} = require("express-validator");
const {parseError} = require("../util/parsers");
const router = require('express').Router()
router.get('/create',isUser(),(req,res) => {
    res.render('booking/create',{title:'Create Page'})
})
router.post('/create'
    ,isUser(),
    body('name').isLength({min:4}).withMessage('Name must be at least 4 characters long!'),
    body('city').isLength({min:3}).withMessage('City must be at least 3 characters long!'),
    body('freeRooms').isLength({min:1,max:100}).withMessage('Free rooms must be between 1 and 100!'),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
    async(req,res) => {
        const {errors} = validationResult(req)
        try {
            if (errors.length > 0) {
                throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
            }
            const hotelData = {
                name:req.body.name,
                city: req.body.city,
                freeRooms: req.body.freeRooms,
                imageUrl:req.body.imageUrl,
                owner: req.user._id
            }
            await req.storage.createHotel(hotelData)

            res.redirect('/')

        } catch (err) {
            console.log(err.message)
            const ctx = {
                errors: parseError(err),
                hotelData: {
                    name: req.body.name,
                    city:req.body.city,
                    freeRooms: req.body.freeRooms,
                    imageUrl:req.body.imageUrl
                },
                title: 'Create Page'
            }
            res.render('booking/create', ctx)
        }
})
router.get('/details/:id',isUser(),async(req,res) => {
    try{
        const hotel = await req.storage.getHotelById(req.params.id)

        hotel.isOwner = req.user && req.user._id == hotel.owner._id
        hotel.isUser = Boolean(req.user)
        hotel.isBooked = req.user && hotel.usersBooked.find(x => x._id == req.user._id)
        hotel.hasRooms = hotel.freeRooms > 0
        res.render('booking/details',{hotel,title:'Details Page'})
    }catch (err) {
        res.render('404')
    }
})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const hotel = await req.storage.getHotelById(req.params.id)
        if(hotel.owner._id != req.user._id) {
            throw new Error('Cannot edit hotel,you haven\'t created')
        }
        res.render('booking/edit',{hotel,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/booking/details/' + req.params.id)
    }

})
router.post('/edit/:id',
    isUser(),
    body('name').isLength({min:4}).withMessage('Name must be at least 4 characters long!'),
    body('city').isLength({min:3}).withMessage('City must be at least 3 characters long!'),
    body('freeRooms').isLength({min:1,max:100}).withMessage('Free rooms must be between 1 and 100!'),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
async(req,res) => {
    try{
        const hotel = await req.storage.getHotelById(req.params.id)
        if(hotel.owner._id != req.user._id) {
            throw new Error('Cannot edit hotel,you haven\'t created')
        }
        await req.storage.editHotel(req.params.id,req.body)
        res.redirect('/booking/details/' + req.params.id)
    }catch (err) {
        const ctx = {
            errors: parseError(err),
            hotel:{
                _id:req.params.id,
                name:req.body.name,
                city:req.body.city,
                freeRooms:req.body.freeRooms,
                imageUrl:req.body.imageUrl
            },
            title:'Edit Page'
        }
        res.render('booking/edit',ctx)

    }
})
router.get('/book/:id',isUser(),async(req,res) => {
    try{
        const hotel = await req.storage.getHotelById(req.params.id)
        if(hotel.owner._id == req.user._id){
            throw new Error ('Cannot book your post!')
        }

        await req.storage.bookHotel(req.params.id,req.user._id)
        res.redirect('/booking/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/booking/details/' + req.params.id)
    }
})
router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const hotel = await req.storage.getHotelById(req.params.id)
        if(hotel.owner._id != req.user._id) {
            throw new Error('Cannot delete hotel,you haven\'t created!')
        }
        await req.storage.deleteHotel(req.params.id)
        res.redirect('/')

    }catch (err) {
        console.log(err.message)
        res.redirect('/booking/details/' + req.params.id)
    }
})
module.exports = router