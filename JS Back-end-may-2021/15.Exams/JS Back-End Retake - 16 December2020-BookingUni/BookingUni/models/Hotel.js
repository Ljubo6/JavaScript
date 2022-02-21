const {Schema,model} = require('mongoose')

const schema = new Schema({
    name:{type:String,required:[true,'Name is required']},
    city: {type: String, required: [true,'City is required']},
    imageUrl:{type: String,required:[true,'Image Url required']},
    freeRooms:{type: Number, required: [true,'Free rooms are required']},
    usersBooked:[{type: Schema.Types.ObjectId,ref:'User',default:[]}],
    owner:{type:Schema.Types.ObjectId,ref:'User',req: true}
})
schema.index({name: 1},{
    unique:true,
    collation:{
        locale:'en',
        strength:2
    }
})
module.exports = model('Hotel',schema)