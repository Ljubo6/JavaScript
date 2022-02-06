const User = require('../models/User')

async function createUser(email,hashedPassword,gender){
    //TODO adapt properties to project requirements
    const user = new User({
        email,
        hashedPassword,
        gender,
        history:[]
    })

    await user.save()
    return user
}

async function  getUserByEmail(email){
    const pattern = new RegExp(`^${email}$`,'i')
    const user = await User.findOne({ email: { $regex:pattern }})
    return user
}
async function getUserHistoryById(id){
    const user =  await User.findById(id).populate('history').lean()
    return user
}

//TODO add function for finding user by other properties, as specified in the project requirements

module.exports = {
    createUser,
    getUserByEmail,
    getUserHistoryById
}