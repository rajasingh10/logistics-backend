const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const { bool } = require('joi');
const ConsignorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
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
    createdOn: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'Consignor'
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})


const Consignor = mongoose.model('Consignor', ConsignorSchema);

module.exports = Consignor;