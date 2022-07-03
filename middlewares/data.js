const mongoose = require('mongoose');
const responder = require('../utils/responder');
const errorCodes = require('../utils/errors');


const middleware = {
    isValidMongoooseId: (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return responder.error(res, errorCodes.invalidId, 400);
        }
        next();
    },
}


module.exports = middleware;