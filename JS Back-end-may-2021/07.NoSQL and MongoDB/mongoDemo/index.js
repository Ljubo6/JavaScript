const mongoose = require('mongoose')
const Comment = require('./models/Comment.js')
const Person = require('./models/Person.js')
const Post = require('./models/Post.js')

start()
async function start(){
    const connectionString = 'mongodb://localhost:27017/test'
    const client = mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Database connected')
    const person = await Person.findOne({})
    const post = await Post.findOne({}).populate('author').populate({
        path:'comments',
        populate:'author'
    })
    console.log(post)

    
}
