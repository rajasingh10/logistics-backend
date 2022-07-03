const responder = require('../utils/responder');
const errorCodes = require('../utils/errors');

const middleware = {
    isAdmin: (req, res, next) => {
        if (res.locals.user.role === "Admin") {
            next();
        } else {
            responder.error(res, errorCodes.unAuthorized, 401);
        }
    },

    isConsignor: (req, res, next) => {
        if (res.locals.user.role === "Consignor") {
            next();
        } else {
            responder.error(res, errorCodes.unAuthorized, 401);
        }
    },

}


module.exports = middleware;