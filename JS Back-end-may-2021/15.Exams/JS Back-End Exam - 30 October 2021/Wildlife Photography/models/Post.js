const {Schema,model} = require('mongoose')


const schema = new Schema({

    title: {type: String,required: [true,'Title is require']},
    keyword:{type: String,required: [true,'Keyword is require']},
    location:{type: String,required: [true,'Location is require']},
    date:{type: String,required: [true,'Date is require']},
    imageUrl:{type: String,required: [true,'Image is require']},
    description:{type: String,required: [true,'Description is require']},
    author:{type: Schema.Types.ObjectId,ref:'User'},
    voters: [{type: Schema.Types.ObjectId,ref:'User',default:[]}],
    rating: {type: Number,default: 0}

})

module.exports = model('Post',schema)