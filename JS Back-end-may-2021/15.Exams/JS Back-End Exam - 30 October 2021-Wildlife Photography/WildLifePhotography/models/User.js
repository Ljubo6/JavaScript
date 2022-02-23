const {Schema,model} = require('mongoose')

const schema = new Schema({
    firstName: {type: String, required: [true,'First name is required']},
    lastName: {type: String, required: [true,'Last name is required']},
    email: {type: String, required: [true,'Email is required']},
    hashedPassword:{type: String, required: [true,'Password is required']},
    posts:[{type:Schema.Types.ObjectId,ref:'Post',default:[]}]
})

module.exports = model('User',schema)