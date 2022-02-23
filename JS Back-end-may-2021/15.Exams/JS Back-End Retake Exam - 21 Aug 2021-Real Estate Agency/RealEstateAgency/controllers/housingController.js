const {isUser} = require("../middlewares/guards");
const {body, validationResult} = require("express-validator");
const {parseError} = require("../util/parsers");
const router = require('express').Router()

router.get('/catalog',async(req,res) => {
    let houses = await req.storage.getAllHouses()
    res.render('housing/catalog',{houses,title:'Catalog Page'})

})
router.get('/create',isUser(),async(req,res) => {
    res.render('housing/create',{title:'Create Page'})
})
router.post('/create',isUser(),
    body('name').isLength({min:6}).withMessage('Name must be at least 6 characters long!'),
    body('type').isIn(['Apartment','Villa','House']).withMessage('Type must one of \'Apartment\',\'Villa\',\'House\'!'),
    body('year').isInt({min:1850,max:2022}).withMessage('Year must be between 1850 and 2022'),
    body('city').isLength({min:4}).withMessage('City name must be oa least 4 characters long!'),
    body('description').isLength({max:60}).withMessage('Description must be at most 60 characters long!'),
    body('pieces').isInt({min:0,max:10}).withMessage('Pieces must be between 0 and 10!'),
    body('imageUrl').custom(value => {
        if (!value.startsWith('https') || !value.startsWith('http') ) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
    async(req,res) => {
        const {errors} = validationResult(req)
    try {
        if(errors.length > 0){
            throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
        }
        const houseData = {
            name: req.body.name.trim(),
            type: req.body.type.trim(),
            year: req.body.year.trim(),
            city: req.body.city.trim(),
            imageUrl: req.body.imageUrl,
            description: req.body.description.trim(),
            pieces: req.body.pieces.trim(),
            owner: req.user._id
        }

        await req.storage.createHouse(houseData)

        res.redirect('/')
    } catch (err) {
        console.log(err.message)
        const ctx = {
            errors: parseError(err),
            houseData: {
                name: req.body.name.trim(),
                type: req.body.type.trim(),
                year: req.body.year,
                city: req.body.city.trim(),
                imageUrl: req.body.imageUrl,
                description: req.body.description.trim(),
                pieces: req.body.pieces.trim(),
            }
        }
        res.render('housing/create', ctx)
    }
})
router.get('/details/:id',async(req,res) => {
    try{
        const house = await req.storage.getHouseById(req.params.id)
        house.hasUser = Boolean(req.user)
        house.isAuthor = req.user && req.user._id == house.owner
        house.isRented = req.user && house.rentedHome.find(x =>  x._id == req.user._id)
        house.rentedPeople = house.rentedHome.map(x => x.name).join(', ')

        res.render('housing/details',{house,title:'Detail Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/404')
    }

})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const house = await req.storage.getHouseById(req.params.id)
        if(house.owner._id != req.user._id) {
            throw new Error('Cannot edit house,you haven\'t created')
        }

        res.render('housing/edit',{house,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/housing/details/' + req.params.id)
    }
})
router.post('/edit/:id',isUser(),
    body('name').isLength({min:6}).withMessage('Name must be at least 6 characters long!'),
    body('type').isIn(['Apartment','Villa','House']).withMessage('Type must one of \'Apartment\',\'Villa\',\'House\'!'),
    body('year').isInt({min:1850,max:2022}).withMessage('Year must be between 1850 and 2022'),
    body('city').isLength({min:4}).withMessage('City name must be oa least 4 characters long!'),
    body('description').isLength({max:60}).withMessage('Description must be at most 60 characters long!'),
    body('pieces').isInt({min:0,max:10}).withMessage('Pieces must be between 0 and 10!'),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
    async(req,res) => {
    try{
        const house = await req.storage.getHouseById(req.params.id)

        if(house.owner != req.user._id){
            throw new Error('Cannot edit house you haven\'t created')
        }

        await req.storage.editHouse(req.params.id,req.body)

        res.redirect('/housing/details/' + req.params.id)

    }catch (err) {
        const ctx = {
            errors: parseError(err),
            house:{
                _id:req.params.id,
                name: req.body.name.trim(),
                type: req.body.type.trim(),
                year: req.body.year,
                city: req.body.city.trim(),
                imageUrl: req.body.imageUrl.trim(),
                description: req.body.description.trim(),
                pieces: req.body.pieces.trim(),
            },
            title:'Edit Page'
        }
        res.render('housing/edit',ctx)
    }
})
router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const house = await req.storage.getHouseById(req.params.id)
        if(house.owner != req.user._id){
            throw new Error('Cannot delete house you haven\'t created')
        }

        await req.storage.deleteHouse(req.params.id)
        res.redirect('/housing/catalog')
    }catch (err) {
        console.log(err.message)
        res.redirect('/housing/details/' + req.params.id)

    }
})
router.get('/rent/:id',isUser(),async(req,res) => {
    try{
        const house = await req.storage.getHouseById(req.params.id)
        if(house.owner == req.user._id){
            throw new Error('Cannot rent your own play')
        }

        await req.storage.userRent(req.params.id,req.user._id)
        res.redirect('/housing/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/housing/details/' + req.params.id)

    }
})
router.get('/search',async(req,res) => {
    res.render('housing/search',{title:'Search Page'})

})
router.post('/search',async(req,res) => {
    const search = req.body.search
    console.log(search)
    const houses = await req.storage.searchByType(search)
    res.render('housing/search',{houses,title:'Search Page'})

})
module.exports = router