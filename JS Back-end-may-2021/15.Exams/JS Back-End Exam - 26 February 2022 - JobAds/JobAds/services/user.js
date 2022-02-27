const User = require('../models/User')

async function createUser(email,hashedPassword,skills){
    const user = new User({
        email,
        hashedPassword,
        skills
    })

    await user.save()
    return user
}
async function  getUserByEmail(email){
    const pattern = new RegExp(`^${email}$`,'i')
    const user = await User.findOne({ email: { $regex:pattern }}).populate('myAd').lean()
    return user
}
async function getAllUsers(criteria){
    const pattern = new RegExp(`^${criteria}$`,'i')
    return User.find({email:pattern}).populate('myAd').lean()
}
module.exports = {
    createUser,
    getUserByEmail,
}