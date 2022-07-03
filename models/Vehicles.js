const mongoose = require('mongoose');
const VehicleSchema = new mongoose.Schema({
    img_url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
})

const Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;