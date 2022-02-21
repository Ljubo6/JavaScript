const {Schema,model} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: [true,'Title is required']},
    description:{type: String, required: [true,'Description is required'],maxLength:[50,'Description must be at most 50 characters long!']},
    imageUrl:{type: String, required: [true,'Image Url is required']},
    isPublic:{type: Boolean,default:false},
    createdAt:{type: Date,default:Date.now},
    usersLiked:[{type:Schema.Types.ObjectId,ref:'User',default:[]}],
    owner:{type:Schema.Types.ObjectId,ref:'User'}
})
schema.index({title: 1},{
    unique:true,
    collation:{
        locale:'en',
        strength:2
    }
})

module.exports = model('Play',schema)