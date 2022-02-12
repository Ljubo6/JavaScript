const Trip = require('../models/Trip')
const User = require('../models/User')

async function getAllTrips(){
    return Trip.find({}).lean()
}
async function getTripById(id){
    return Trip.findById(id).populate('creator').populate('buddies').lean()
}
async function createTrip(tripData){

    const trip = new Trip(tripData)
    const user = await User.findById(trip.creator)

    user.history.push(trip)
    await Promise.all([user.save(),trip.save()])
    return trip
}
async function editTrip(id,tripData){
    const trip = await Trip.findById(id)

    trip.startPoint = tripData.startPoint.trim()
    trip.endPoint = tripData.endPoint.trim()
    trip.date = tripData.date
    trip.time = tripData.time.trim()
    trip.imageUrl = tripData.imageUrl.trim()
    trip.carBrand = tripData.carBrand.trim()
    trip.seats = tripData.seats.trim()
    trip.price = tripData.price.trim()
    trip.description = tripData.description.trim()

    return trip.save()
}
async function deleteTrip(id){
    await Trip.findByIdAndDelete(id)
}
async function joinTrip(tripId,userId){
    const trip = await Trip.findById(tripId)

    trip.buddies.push(userId)
    trip.seats--
    return trip.save()
}
module.exports = {
    getAllTrips,
    getTripById,
    createTrip,
    joinTrip,
    deleteTrip,
    editTrip
}