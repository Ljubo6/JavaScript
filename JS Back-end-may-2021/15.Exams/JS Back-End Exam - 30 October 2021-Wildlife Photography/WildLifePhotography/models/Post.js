const {Schema,model} = require('mongoose')
const schema = new Schema({
        title:{type:String,required:[true,'Title is required']},
        keyword:{type:String,required:[true,'Keyword is required']},
        location:{type:String,required:[true,'Location is required']},
        date:{type:String,required:[true,'Date is required']},
        imageUrl:{type:String,required:[true,'Image is required'], match: [/^https?/, 'Image must be a valid URL']},
        description:{type:String,required:[true,'Description is required']},
        author:{type:Schema.Types.ObjectId,ref:'User'},
        votes:[{type:Schema.Types.ObjectId,ref:'User',default:[]}],
        rating:{type:Number,default:0}
})
module.exports = model('Post',schema)
