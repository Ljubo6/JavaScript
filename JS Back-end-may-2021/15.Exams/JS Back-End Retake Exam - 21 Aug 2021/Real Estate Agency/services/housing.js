const Housing = require('../models/Housing')

async function getAllHousings(){
    return Housing.find({}).lean()
}
async function getHousingById(id){
    return Housing.findById(id).populate('rentedHome').lean()
}
async function createHousing(housingData){
    const pattern = new RegExp(`^{housingData.name}$`,'i')
    const existing = await Housing.findOne({name:{$regex: pattern}})

    if (existing){
        throw new Error('A housing with this name already exists!')
    }
    const housing = new Housing(housingData)

    await housing.save()

    return housing
}
async function editHousing(id,housingData){
    const housing = await Housing.findById(id)

    housing.name = housingData.name.trim()
    housing.type =housingData.type.trim()
    housing.year = housingData.year.trim()
    housing.city = housingData.city.trim()
    housing.imageUrl = housingData.imageUrl.trim()
    housing.description = housingData.description.trim()
    housing.pieces = housingData.pieces.trim()

    return housing.save()

}
async function deleteHousing(id){
    return Housing.findByIdAndDelete(id)
}
async function rentHousing(housingId,userId){
    const housing = await Housing.findById(housingId)

    housing.rentedHome.push(userId)

    return housing.save()
}
async function searchByType(type){
    return Housing.find({'type' : type}).lean()
}

module.exports = {
    getAllHousings,
    getHousingById,
    createHousing,
    editHousing,
    deleteHousing,
    rentHousing,
    searchByType
}