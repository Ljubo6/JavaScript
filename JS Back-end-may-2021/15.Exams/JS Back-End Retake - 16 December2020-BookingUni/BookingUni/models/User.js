const {Schema,model} = require('mongoose')

const schema = new Schema({
    email:{type:String,required:[true,'Email is required']},
    username: {type: String, required: [true,'Username is required']},
    hashedPassword:{type: String, required: [true,'Password is required']},
    bookedHotels:[{type: Schema.Types.ObjectId,ref:'Hotel',default:[]}],
    offeredHotels:[{type: Schema.Types.ObjectId,ref:'Hotel',default:[]}]
})
schema.index({email: 1},{
    unique:true,
    collation:{
        locale:'en',
        strength:2
    }
})
schema.index({username: 1},{
    unique:true,
    collation:{
        locale:'en',
        strength:2
    }
})
module.exports = model('User',schema)