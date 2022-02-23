const {Schema,model} = require('mongoose')

const schema = new Schema({
    name:{type:String,required:[true,'Name is required']},
    type: {type: String,enum:['Apartment','Villa','House'],required: [true,'Type is required']},
    year:{type: Number, required: [true,'Year is required']},
    city:{type:String,required:[true,'City is required']},
    imageUrl:{type:String,required:[true,'Home image is required']},
    description:{type:String,required:[true,'Description is required']},
    pieces:{type: Number, required: [true,'Available pieces are required']},
    rentedHome:[{type: Schema.Types.ObjectId,ref:'User',default:[]}],
    owner:{type:Schema.Types.ObjectId,ref:'User'}
})

module.exports = model('Housing',schema)