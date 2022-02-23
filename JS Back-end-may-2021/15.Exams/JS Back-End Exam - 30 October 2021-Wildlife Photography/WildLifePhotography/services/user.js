const User = require('../models/User')

async function createUser(firstName,lastName,email,hashedPassword){
    //TODO adapt properties to project requirements
    const user = new User({
        firstName,
        lastName,
        email,
        hashedPassword
    })

    await user.save()
    return user
}

async function  getUserByEmail(email){
    const pattern = new RegExp(`^${email}$`,'i')
    const user = await User.findOne({ email: { $regex:pattern }})
    return user
}


//TODO add function for finding user by other properties, as specified in the project requirements

module.exports = {
    createUser,
    getUserByEmail
}