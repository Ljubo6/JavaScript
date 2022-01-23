const {Schema,model} = require('mongoose')
const Comment = require('./Comment.js')

const schema = new Schema ({
    name:{type:String, required:true},
    description:{type:String,required:[true,'Description is required'],maxlength:500},
    imageUrl:{
        type:String,
        required:true,
        validate:{
            validator(value){
                return /^https?:\/\//.test(value)
            },
            message:'Image must be a valid URL'
        }
    },
    difficulty:{type:Number,min:1,max:6},
    comments:[{type:Schema.Types.ObjectId,ref:'Comment'}],
    accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessory' }],
    author:{type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Cube',schema)