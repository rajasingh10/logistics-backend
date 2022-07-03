const Joi = require('joi');

const createConsignor = data => {

    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(40).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().min(10).max(10).required(),
        password: Joi.string().min(6).max(40).required(),
        address: Joi.string().min(10).max(100).required(),
        aadhar: Joi.string().min(12).max(12).required(),
    });

    return schema.validate(data);
}


module.exports = {
    createConsignorValidation: createConsignor
}