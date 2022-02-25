const {Schema,model} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: [true,'Title is required']},
    paintingTechnique:{type: String, required: [true,'Painting technique is required']},
    imageUrl:{type: String,required:[true,'Art picture is required']},
    certificate:{type: String,enum:['Yes','No'],required:[true,'Certificate of authenticity must be "Yes" or "No"']},
    author:{type: Schema.Types.ObjectId,ref:'User'},
    usersShared:[{type:Schema.Types.ObjectId,ref:'User',default:[]}]
})

module.exports = model('Publication',schema)

