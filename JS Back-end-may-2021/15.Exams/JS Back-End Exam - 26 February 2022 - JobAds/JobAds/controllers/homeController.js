const router = require('express').Router()
router.get('/',async(req,res) => {
    let jobs = await req.storage.getAllJobs()
    jobs = jobs.slice(0,3)
    console.log(jobs)
    res.render('home/home',{jobs,title:'Home Page'})
})
module.exports = router