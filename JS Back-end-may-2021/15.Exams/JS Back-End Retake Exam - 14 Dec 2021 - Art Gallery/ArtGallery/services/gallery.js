const Publication = require('../models/Publucation')
const User = require('../models/User')

async function getAllPublications(){
    return Publication.find({}).lean()
}
async function createPublication(publicationData){
    const pattern = new RegExp(`^${publicationData.title}$`,'i')
    const  existing = await Publication.findOne({title: {$regex:pattern}})
    if(existing){
        throw new Error('A publication with this title already exist!')
    }
    const publication = new Publication(publicationData)
    const user = await User.findById(publication.author._id)
    user.myPublications.push(publication)
    await Promise.all([user.save(),publication.save()])
}
async function getPublicationById(id){
    return Publication.findById(id).populate('author').populate('usersShared').lean()
}
async function editPublication(id,publicationData){
    const publication = await Publication.findById(id)

    publication.title = publicationData.title.trim()
    publication.paintingTechnique = publicationData.paintingTechnique.trim()
    publication.imageUrl = publicationData.imageUrl.trim()
    publication.certificate = publicationData.certificate.trim()

    return publication.save()
}
async function deletePublication(id){
    return Publication.findByIdAndDelete(id)
}
async function sharePublication(publicationId,userId){
    const publication = await Publication.findById(publicationId)
    const user = await User.findById(userId)
    publication.usersShared.push(userId)
    user.myPublications.push(publication)

    return Promise.all( [publication.save(),user.save()])
}
async function getPublicationByAuthorId(id){
    return Publication.find({author: id}).populate('author').lean()

}
async function getAllSharedPublicationsByUserId(id){
    return Publication.find({usersShared:id}).populate('usersShared').lean()
}
module.exports = {
    createPublication,
    getAllPublications,
    getPublicationById,
    editPublication,
    deletePublication,
    sharePublication,
    getPublicationByAuthorId,
    getAllSharedPublicationsByUserId
}