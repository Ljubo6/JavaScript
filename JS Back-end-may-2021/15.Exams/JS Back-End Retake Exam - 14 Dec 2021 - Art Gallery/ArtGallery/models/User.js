const {Schema,model} = require('mongoose')

const schema = new Schema({
    username: {type: String, required: [true,'Username required']},
    hashedPassword:{type: String, required: [true,'Password required']},
    address:{type: String,required:[true,'Address required']},
    myPublications:[{type:Schema.Types.ObjectId,ref:'Publication',default:[]}]
})

module.exports = model('User',schema)