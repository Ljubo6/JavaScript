const Post = require('../models/Post')

async function getAllPosts(){
    return Post.find({}).lean()
}
async function getPostById(id){
    return Post.findById(id).populate('author').populate('voters').lean()
}
async function createPost(postData){
    const pattern = new RegExp(`^{postData.title}$`,'i')
    const existing = await Post.findOne({title: {$regex: pattern}})

    if (existing){
        throw  new Error('A post with this name already exist!')
    }
    const post = new Post(postData)
    await post.save()
    return post
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
   await Post.findByIdAndDelete(id)
}
async function getPostsByAuthorId(id){
    return Post.find({'author' : id}).populate('author').lean()
}
async function likePost(postId,userId){
    const post = await Post.findById(postId)

    post.voters.push(userId)
    post.rating += 1

    return post.save()
}
async function dislikePost(postId,userId){
    const post = await Post.findById(postId)

    post.voters.push(userId)
    post.rating -= 1

    return post.save()
}
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost,
    getPostsByAuthorId,
    likePost,
    dislikePost
}