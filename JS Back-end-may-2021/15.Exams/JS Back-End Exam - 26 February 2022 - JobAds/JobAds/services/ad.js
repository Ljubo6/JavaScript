const Ad = require('../models/Ad')
const User = require('../models/User')

async function getAllJobs(){

    return Ad.find({},).populate('author').lean()
}
async function createJob(jobData){
    const job = new Ad(jobData)
    const user = await User.findById(job.author)

    user.myAd.push(job)
    await Promise.all([user.save(),job.save()])
    return job
}
async function getJobById(id){
    return Ad.findById(id).populate('author').populate('applied').lean()
}
async function editJob(id,jobData){
    const job = await Ad.findById(id)

    job.headline = jobData.headline
    job.location = jobData.location
    job.companyName = jobData.companyName
    job.companyDescription = jobData.companyDescription
    await job.save()
    return job
}
async function applyJob(jobId,userId){
    const job = await Ad.findById(jobId)
    const user = await User.findById(userId)
    job.applied.push(userId)
    user.myAd.push(job)

    return Promise.all( [job.save(),user.save()])
}
async function deleteJob(id){
    return Ad.findByIdAndDelete(id)
}
module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    editJob,
    deleteJob,
    applyJob,
}