const Post = require('../models/Post')
const User = require('../models/User')

async function getAllPosts(){
    return Post.find({}).lean()
}
async function getPostById(id){
    return Post.findById(id).populate('author').populate('votes').lean()
}
async function createPost(postData){
    const pattern = new RegExp(`^${postData.title}$`,'i')
    const  existing = await Post.findOne({title: {$regex:pattern}})
    if(existing){
        throw new Error('A post with this title already exist!')
    }
    const post = new Post(postData)
    const user = await User.findById(post.author._id)
    user.posts.push(post)
    await Promise.all([user.save(),post.save()])
}
async function editPost(id,postData){
    const post = await Post.findById(id)

    post.title = postData.title.trim()
    post.keyword = postData.keyword.trim()
    post.location = postData.location.trim()
    post.date = postData.date.trim()
    post.imageUrl = postData.imageUrl.trim()
    post.description = postData.description.trim()

    return post.save()
}
async function deletePost(id){
    return Post.findByIdAndDelete(id)
}
async function likePost(postId,userId){
    const post = await Post.findById(postId)

    post.votes.push(userId)
    post.rating++

    return post.save()
}
async function dislikePost(postId,userId){
    const post = await Post.findById(postId)

    post.votes.push(userId)
    post.rating--

    return post.save()
}
async function getPostByAuthorId(id){
    return Post.find({author: id}).populate('author').lean()
}
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    deletePost,
    editPost,
    likePost,
    dislikePost,
    getPostByAuthorId
}