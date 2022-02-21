const router = require('express').Router()
router.get('/',async(req,res) => {

    if(req.user){
        let sort = {createdAt: -1}
        let filter = {isPublic:true}
        const orderCriteria = req.query.orderBy
        if(orderCriteria === 'likes'){
            sort = {usersLiked: 'desc'}
            filter = {}
        }else if(orderCriteria === 'date'){
            sort = {createdAt: 1}
            filter = {}
        }
        let plays = await req.storage.getAllPlays(sort,filter)
        res.render('home/home-loggedIn',{plays,title:'Home Page'})
    }else{
        let sort = {usersLiked: 'desc'}
        let filter = {isPublic:true}
        let plays = await req.storage.getAllPlays(sort,filter)

        plays = plays.slice(0,3)
        res.render('home/home-loggedOut',{plays,title:'Home Page'})
    }
})

module.exports = router