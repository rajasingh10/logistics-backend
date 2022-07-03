const mongoose = require('mongoose');



const BookingSchema = new mongoose.Schema({
    consignorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    bookingDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'in-transit', 'delivered'],
        default: 'pending',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true
    },
    fromLatitude: {
        type: String,
        required: true
    },
    fromLongitude: {
        type: String,
        required: true
    },
    toLatitude: {
        type: String,
        required: true
    },
    toLongitude: {
        type: String,
        required: true
    },

})


const Booking = mongoose.model('Booking', BookingSchema);


module.exports = Booking;