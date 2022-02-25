const User = require('../models/User')

async function createUser(username,hashedPassword,address){
    //TODO adapt properties to project requirements
    const user = new User({
        username,
        hashedPassword,
        address
    })

    await user.save()
    return user
}

async function  getUserByUsername(username){
    const pattern = new RegExp(`^${username}$`,'i')
    const user = await User.findOne({ username: { $regex:pattern }})
    return user
}
async function findUserById(id){
    return User.findById(id).populate('myPublications').lean()
}

module.exports = {
    createUser,
    getUserByUsername,
    findUserById
}