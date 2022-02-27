const {Schema,model} = require('mongoose')

const schema = new Schema({
    headline: {type: String, required: [true,'Headline is required']},
    location:{type: String, required: [true,'location is required']},
    companyName:{type:String,required:[true,'Company name is required']},
    companyDescription:{type:String,required:[true,'Company description is required']},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    applied:[{type:Schema.Types.ObjectId,ref:'User',default:[]}]
})

module.exports = model('Ad',schema)

