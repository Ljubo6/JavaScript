const router = require('express').Router()
const moment = require('moment')
router.get('/',async(req,res) => {
    if (req.user){
        let sort = {createdAt: 1}
        const searchCriteria = req.query.search
        let courses = await req.storage.getAllCourses(sort,searchCriteria)
        courses = courses.map(x => ({...x,createdAt: moment(x.createdAt).format('llll')}) )
        res.render('home/user',{courses,title:'Home Page'})
    }else{
        let sort = {usersEnrolled: -1}
        let courses = await req.storage.getAllCourses(sort)
        courses = courses.slice(0,3)
        res.render('home/guest',{courses,title:'Home Page'})
    }

})

module.exports = router