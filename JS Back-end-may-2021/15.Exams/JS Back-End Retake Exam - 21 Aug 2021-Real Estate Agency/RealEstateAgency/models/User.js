const {Schema,model} = require('mongoose')

const schema = new Schema({
    name:{type:String,required:[true,'Name is required']},
    username: {type: String, required: [true,'Username is required']},
    hashedPassword:{type: String, required: [true,'Password is required']}
})

module.exports = model('User',schema)