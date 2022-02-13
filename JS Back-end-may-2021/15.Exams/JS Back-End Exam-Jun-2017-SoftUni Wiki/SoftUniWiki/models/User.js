const {Schema,model} = require('mongoose')

const schema = new Schema({
    username: {type: String, required: [true,'Username is required']},
    hashedPassword:{type: String, required: [true,'Password is required']},
    createdArticles: [{type: Schema.Types.ObjectId,ref:'Article',default:[]}]
})

module.exports = model('User',schema)