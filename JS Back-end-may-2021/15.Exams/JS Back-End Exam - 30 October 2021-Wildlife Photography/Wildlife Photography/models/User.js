const {Schema,model} = require('mongoose')

// •	First Name - string (required),
// •	Last Name - string (required),
// •	Email - string (required),
// •	Password - string (required),
// •	My Posts - a collection of Post (a reference to the Post Model)

const schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    hashedPassword:{type: String, required: true},
    posts: [{type: Schema.Types.ObjectId,ref: 'Post',default:[]}]
})

module.exports = model('User',schema)