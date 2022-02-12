const {Schema,model} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: [true,'Title is required']},
    description:{type: String, required: [true,'Description is required']},
    imageUrl:{type: String, required: [true,'ImageUrl is required']},
    duration:{type: String, required: [true,'Duration is required']},
    createdAt:{type: Date, default:Date.now},
    usersEnrolled:[{type:Schema.Types.ObjectId,ref:'User',default:[]}],
    author:{type:Schema.Types.ObjectId,ref:'User'}
})

module.exports = model('Course',schema)