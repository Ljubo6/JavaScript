const {Schema,model} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: [true,'Title is required!']},
    description:{type: String, required: [true,'Description is required']},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt: {type: Date,default: Date.now}
})

module.exports = model('Article',schema)