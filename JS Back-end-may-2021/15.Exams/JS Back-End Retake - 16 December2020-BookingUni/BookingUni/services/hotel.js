const Hotel = require('../models/Hotel')
const User = require('../models/User')


async function  getAllBookings(){
    const sort = {freeRooms: -1}
    return Hotel.find({}).sort(sort).lean()
}
async function createHotel(hotelData){
    const pattern = new RegExp(`^${hotelData.name}$`, 'i');
    const existing = await Hotel.findOne({ name: { $regex: pattern } });

    if(existing){
        throw new Error('A hotel with this name already exist!')
    }
    const hotel = new Hotel(hotelData)
    const user = await User.findById(hotelData.owner)
    user.offeredHotels.push(hotel)
    return Promise.all([user.save(),hotel.save()])

}
async function getHotelById(id){
    return Hotel.findById(id).lean()

}
async function editHotel(id,hotelData){
    const hotel = await Hotel.findById(id)

    hotel.name = hotelData.name.trim()
    hotel.city = hotelData.city.trim()
    hotel.freeRooms = hotelData.freeRooms.trim()
    hotel.imageUrl = hotelData.imageUrl.trim()

    return hotel.save()
}

async function bookHotel(hotelId,userId){
    const hotel = await Hotel.findById(hotelId)
    const user = await User.findById(userId)
    if(hotel.freeRooms > 0){
        hotel.freeRooms--
    }

    hotel.usersBooked.push(userId)
    user.bookedHotels.push(hotel)

    return Promise.all( [hotel.save(),user.save()])
}
async function deleteHotel(id){
    return Hotel.findByIdAndDelete((id))
}

module.exports = {
    getAllBookings,
    createHotel,
    getHotelById,
    editHotel,
    bookHotel,
    deleteHotel
}