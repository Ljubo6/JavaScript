const Housing = require('../models/Housing')
const User = require('../models/User')

async function createHouse(houseData){
    const pattern = new RegExp(`^${houseData.name}$`, 'i');
    const existing = await Housing.findOne({ name: { $regex: pattern } });

    if(existing){
        throw new Error('A house with this name already exist!')
    }
    const house = new Housing(houseData)

    return house.save()
}
async function getAllHouses(){
    return Housing.find({}).lean()
}
async function getHouseById(id){
    return Housing.findById(id).populate('rentedHome').lean()
}
async function editHouse(id,houseData){
    const house = await Housing.findById(id)
    house.name = houseData.name.trim()
    house.type = houseData.type.trim()
    house.year = houseData.year
    house.city = houseData.city.trim()
    house.imageUrl = houseData.imageUrl.trim()
    house.description = houseData.description.trim()
    house.pieces = houseData.pieces.trim()

    return house.save()
}
async function userRent(houseId,userId){
    const house = await Housing.findById(houseId)
    if(house.pieces > 0){
        house.pieces--
    }
    house.rentedHome.push(userId)
    return house.save()

}
async function deleteHouse(id){
    return Housing.findByIdAndDelete(id)
}
async function searchByType(searchType){
    const pattern = new RegExp(searchType,'i')
    return Housing.find({type: pattern}).lean()
}
module.exports = {
    createHouse,
    getHouseById,
    getAllHouses,
    userRent,
    editHouse,
    deleteHouse,
    searchByType

}