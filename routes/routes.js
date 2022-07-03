const router = require('express').Router();
const auth = require('./auth.js');
const roleMiddleware = require('../middlewares/role')
const consignor = require('./consignor.js');
const admin = require('./admin.js');
const authJwtMiddleware = require('../middlewares/authJwt.js');

//required no authentication

router.use('/auth', auth);


//required authentication to get all end points

router.use(authJwtMiddleware.authenticateJWT)


router.use('/consignor', roleMiddleware.isConsignor, consignor);
router.use('/admin', roleMiddleware.isAdmin, admin);



module.exports = router;