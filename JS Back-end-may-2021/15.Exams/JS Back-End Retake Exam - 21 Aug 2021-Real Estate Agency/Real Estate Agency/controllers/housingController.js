const {isUser} = require("../middlewares/guards");
const {body, validationResult} = require("express-validator");
const router = require('express').Router()
const{parseError} = require('../util/parsers')

router.get('/catalog',async(req,res) => {
    const housings = await req.storage.getAllHousings()
    res.render('housing/catalog',{housings,title:'Catalog Page'})
})
router.get('/create',isUser(),(req,res) => {
    res.render('housing/create',{title:'Create Page'})
})
router.post('/create',isUser(),
    body('name').isLength({min: 6}).withMessage('Name must be at least 6 characters length!').bail(),
    body('type').isIn(['Apartment','Villa','House']).withMessage("The options are 'Apartment','Villa','House'"),
    body('year').isInt({min: 1850,max: 2021}).withMessage('Year must be between 1850 and 2021').bail(),
    body('city').isLength({min: 4}).withMessage('City name must be at least 4 characters long!').bail(),
    body('description').isLength({max:60}).withMessage('Description must be no more than 60 characters long!').bail(),
    body('pieces').isInt({min:0,max:10}).withMessage('The pieces must be a positive number from 0 to 10').bail(),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
    async(req,res) => {
        const {errors} = validationResult(req)
        try{
            if(errors.length > 0){
                throw  new Error(Object.values(errors).map(e => e.msg).join('\n'))
            }
            const housingData = {
                name: req.body.name.trim(),
                type: req.body.type.trim(),
                year: req.body.year.trim(),
                city: req.body.city.trim(),
                imageUrl: req.body.imageUrl.trim(),
                description: req.body.description.trim(),
                pieces: req.body.pieces.trim(),
                owner: req.user._id
            }
            await req.storage.createHousing(housingData)

            res.redirect('/housing/catalog')

        }catch (err) {
            console.log(err.message)
            const ctx = {
                errors: parseError(err),
                housingData:{
                    name: req.body.name.trim(),
                    type: req.body.type.trim(),
                    year: req.body.year.trim(),
                    city: req.body.city.trim(),
                    imageUrl: req.body.imageUrl.trim(),
                    description: req.body.description.trim(),
                    pieces: req.body.pieces.trim()
                },
                title: 'Create Page'
            }
            res.render('housing/create',ctx)
        }
})

router.get('/details/:id',async(req,res) => {

    try{
        const housing = await req.storage.getHousingById(req.params.id)

        housing.isOwner = req.user && req.user._id == housing.owner._id
        housing.isUser = Boolean(req.user)
        housing.freePieces = Number(housing.pieces) - housing.rentedHome.length
        housing.isRented = req.user && housing.rentedHome.find(r => r._id == req.user._id)
        housing.rentedPeople = housing.rentedHome.map(r => r.name).join(', ')


        res.render('housing/details',{housing,title:'Details Page'})
    }catch (err) {
        res.render('error404/404')
    }
})
router.get('/edit/:id',isUser(),async(req,res) => {
    try{
        const housing = await req.storage.getHousingById(req.params.id)
        if(housing.owner._id != req.user._id) {
            throw new Error('Cannot edit post,you haven\'t created')
        }

        res.render('housing/edit',{housing,title:'Edit Page'})
    }catch (err) {
        console.log(err.message)
        res.redirect('/housing/details/' + req.params.id)
    }
})
router.post('/edit/:id',isUser(),
    body('name').isLength({min: 6}).withMessage('Name must be at least 6 characters length!').bail(),
    body('type').isIn(['Apartment','Villa','House']).withMessage("The options are 'Apartment','Villa','House'"),
    body('year').isInt({min: 1850,max: 2021}).withMessage('Year must be between 1850 and 2021').bail(),
    body('city').isLength({min: 4}).withMessage('City name must be at least 4 characters long!').bail(),
    body('description').isLength({max:60}).withMessage('Description must be no more than 60 characters long!').bail(),
    body('pieces').isInt({min:0,max:10}).withMessage('The pieces must be a positive number from 0 to 10').bail(),
    body('imageUrl').custom((value) => {
        if (!value.startsWith('http') || !value.startsWith('https')) {
            throw  new Error('The url must starts with http or https')
        }
        return true
    }),
    async(req,res) => {

        try{
            const housing = await req.storage.getHousingById(req.params.id)
            if(housing.owner._id != req.user._id){
                throw new Error('Cannot edit housing,you haven\'t created')
            }
            await req.storage.editHousing(req.params.id,req.body)
            console.log(housing)

            res.redirect('/housing/details/' + req.params.id)

        }catch (err) {

            const ctx = {
                errors: parseError(err),
                housing:{
                    _id: req.params.id,
                    name: req.body.name.trim(),
                    type: req.body.type.trim(),
                    year: req.body.year.trim(),
                    city: req.body.city.trim(),
                    imageUrl: req.body.imageUrl.trim(),
                    description: req.body.description.trim(),
                    pieces: req.body.pieces.trim()
                },
            }
            res.render('housing/edit',ctx)
        }
    })
router.get('/delete/:id',isUser(),async(req,res) => {
    try{
        const housing = await req.storage.getHousingById(req.params.id)
        if(housing.owner._id != req.user._id) {
            throw new Error('Cannot delete post,you haven\'t created!')
        }
        await req.storage.deleteHousing(req.params.id)
        res.redirect('/housing/catalog')

    }catch (err) {
        console.log(err.message)
        res.redirect('/housing/details/' + req.params.id)
    }
})
router.get('/rent/:id',isUser(),async(req,res) => {
    try{
        const housing = await req.storage.getHousingById(req.params.id)
        console.log(housing)
        await req.storage.rentHousing(req.params.id,req.user._id)
        res.redirect('/housing/details/' + req.params.id)
    }catch (err) {
        console.log(err.message)
        res.redirect('/housing/details/' + req.params.id)
    }
})
router.get('/search',(req,res) => {
    res.render('housing/search',{title:'Search Page'})
})
router.post('/search',async(req,res) => {
    const search = req.body.search
    const housing = await req.storage.searchByType(search)
    res.render('housing/search',{housing,title:'Search Page'})
})

module.exports = router