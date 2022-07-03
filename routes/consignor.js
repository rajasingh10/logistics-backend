const router = require('express').Router();
const consignorController = require('../controllers/consignor');
const dataMiddleware = require('../middlewares/data');



// All routes relating to all consignors

router.get("/vehicles", consignorController.getAllVehicles);
router.get("/vehicles/:id", consignorController.getVehicle);
router.get("/bookings", consignorController.getAllBookings);

router.get("/booking/:id", consignorController.getBooking);

router.post("/createBooking", consignorController.createBooking);



module.exports = router;