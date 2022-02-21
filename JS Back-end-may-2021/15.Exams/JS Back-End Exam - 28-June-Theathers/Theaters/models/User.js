const {Schema,model} = require('mongoose')

const schema = new Schema({
    username: {type: String, required: true},
    hashedPassword:{type: String, required: true},
    likedPlays:[{type:Schema.Types.ObjectId,ref:'Play',default:[]}]
})
schema.index({username: 1},{
    unique:true,
    collation:{
        locale:'en',
        strength:2
    }
})

module.exports = model('User',schema)