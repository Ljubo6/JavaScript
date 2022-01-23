const {Schema,model} = require('mongoose')
const schema = new Schema({
    author:{type:Schema.Types.ObjectId,ref:'Person'},
    title:{type:String,required:true},
    content:{type:String,minlength:10},
    comments:[{type:Schema.Types.ObjectId,ref:'Comment'}]
})
module.exports = model('Post',schema)