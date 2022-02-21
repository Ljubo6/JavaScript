const User = require('../models/User')

async function createUser(email,username,hashedPassword){
    const user = new User({
        email,
        username,
        hashedPassword
    })

    await user.save()
    return user
}
async function  getUserByUsername(username){
    const pattern = new RegExp(`^${username}$`,'i')
    const user = await User.findOne({ username: { $regex:pattern }})
    return user
}
async function getUserBookedById(id){
    const user = await User.findById(id).populate('bookedHotels').lean()
    return user
}
module.exports = {
    createUser,
    getUserByUsername,
    getUserBookedById
}