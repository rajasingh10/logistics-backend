const router = require('express').Router();
const adminController = require('../controllers/admin');
const dataMiddleware = require('../middlewares/data');

// All routes relating to the admin

router.post("/addVehicle", adminController.addVehicle);
router.get("/vehicles", adminController.getAllVehicles);
router.get("/vehicles/:id", adminController.getVehicle);
router.get("/bookings", adminController.getAllBookings);
router.post("/bookings/:id", adminController.updateBooking);

router.get("/booking/:id", adminController.getBooking);



module.exports = router;