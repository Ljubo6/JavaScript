const Play = require('../models/Play')
const User = require('../models/User')

async function getAllPlays(sort,filter){
    return Play.find(filter).populate('usersLiked').sort(sort).lean()
}
async function createPlay(playData){
    const pattern = new RegExp(`^${playData.title}$`, 'i');
    const existing = await Play.findOne({ title: { $regex: pattern } });

    if(existing){
        throw new Error('A play with this name already exist!')
    }
    const play = new Play(playData)
    return play.save()
}
async function getPlayById(id){
    return Play.findById(id).lean()
}
async function editPlay(id,playData){
    const play = await Play.findById(id)

    play.title = playData.title.trim()
    play.description = playData.description.trim()
    play.imageUrl = playData.imageUrl.trim()
    play.isPublic = Boolean(playData.isPublic)
    return play.save()
}
async function deletePlay(id){
    return Play.findByIdAndDelete(id)
}
async function likePlay(playId,userId){
    const play = await Play.findById(playId)
    const user = await User.findById(userId)
    play.usersLiked.push(userId)
    user.likedPlays.push(play)

    return Promise.all( [play.save(),user.save()])
}
module.exports = {
    getAllPlays,
    createPlay,
    getPlayById,
    editPlay,
    deletePlay,
    likePlay
}