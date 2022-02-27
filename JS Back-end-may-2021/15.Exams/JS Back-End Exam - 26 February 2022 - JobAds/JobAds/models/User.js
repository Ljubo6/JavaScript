const {Schema,model} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: [true,'Email is required']},
    hashedPassword:{type: String, required: [true,'Password is required']},
    skills:{type:String,required:[true,'Skills is required']},
    myAd:[{type:Schema.Types.ObjectId,ref:'Ad',default:[]}]
})

module.exports = model('User',schema)

