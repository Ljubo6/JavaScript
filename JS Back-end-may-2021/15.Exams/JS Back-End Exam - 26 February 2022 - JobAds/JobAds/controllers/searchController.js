const router = require('express').Router()
router.get('/search',async(req,res) => {
    res.render('search/search',{title:'Search Page'})
})
router.post('/search',async(req,res) => {
    const criteria = req.body.search
    let user = await req.storage.getUserByEmail(criteria)
    console.log(user)
    res.render('search/search',{user,title:'Search Page'})
})
module.exports = router