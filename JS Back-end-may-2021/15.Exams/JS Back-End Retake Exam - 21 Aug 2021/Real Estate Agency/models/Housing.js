const {Schema,model, SchemaType} = require('mongoose')

const schema = new Schema({
    name:{type: String,required:true},
    type: {type: String,enum:['Apartment','Villa','House'], required: true},
    year:{type: Number, required: true},
    city:{type: String, required: true},
    imageUrl:{type: String, required: true},
    description:{type: String, required: true},
    pieces:{type: Number, required: true},
    rentedHome:[{type: Schema.Types.ObjectId,ref:'User',default:[]}],
    owner:{type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Housing',schema)