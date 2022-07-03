const router = require('express').Router();
const authController = require('../controllers/auth')
const responder = require('../utils/responder');
const Consignor = require('../models/Consignor');
const authJwtMiddleware = require('../middlewares/authJwt.js');
const roleMiddleware = require('../middlewares/role')

router.post("/logout", authJwtMiddleware.authenticateJWT, authController.logout);
router.post("/login", authController.login);



router.post('/register', authController.registerConsignor);


module.exports = router;