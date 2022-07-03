const responder = require('../utils/responder');
const Consignor = require('../models/Consignor');

const Booking = require('../models/Booking');
const Vehicle = require('../models/Vehicles');




const controller = {
    createBooking: async (req, res) => {
        try {
            const booking = new Booking({ ...req.body });
            booking.save((err, newbooking) => {
                if (err) return responder.error(res, err, 400);
                return responder.success(res, { message: "booking created Successfully", booking: newbooking }, 201);
            })
        } catch (error) {
            return responder.error(res, error, 400);
        }
    },

    getAllBookings: async (req, res) => {
        try {
            const allBooking = await Booking.find({});
            responder.success(res, { message: "Booking fetched successfully", Booking: allBooking });

        } catch (err) {
            responder.error(res, err, 500);
        }
    },
    getAllVehicles: async (req, res) => {
        try {
            const allVehicle = await Vehicle.find({});
            responder.success(res, { message: "Vehicle fetched successfully", Vehicle: allVehicle });

        } catch (err) {
            responder.error(res, err, 500);
        }
    },
    getVehicle: async (req, res) => {
        try {
            const id = req.params.id;
            const vehicle = await Vehicle.find({ id });
            responder.success(res, { message: "Vehicle fetched successfully", Vehicle: vehicle });

        } catch (err) {
            responder.error(res, err, 500);
        }
    },
    getBooking: async (req, res) => {
        try {
            const id = req.params.id;
            const booking = await Booking.find({ id });
            const vehicle = await Vehicle.find({ id: booking.vehicleId });

            responder.success(res, { message: "Booking fetched successfully", Booking: booking, Vehicle: vehicle });

        } catch (err) {
            responder.error(res, err, 500);
        }
    },

}


module.exports = controller;