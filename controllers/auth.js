const responder = require('../utils/responder');
const { createConsignorValidation } = require('../validators/Consignor');

const Consignor = require('../models/Consignor');
const Admin = require('../models/Admin');


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





const controller = {
    registerConsignor: async (req, res) => {
        // console.log(req.body);
        const { name, password, email, phone, address, aadhar } = req.body;
        const { error } = createConsignorValidation(req.body);

        if (error) {
            return responder.error(res, error.details[0].message, 400);
        }
        try {
            const AlreadyExist = await Consignor.findOne({ email });


            if (AlreadyExist) {
                return responder.error(res, "Account already Exist", 409);
            }
            else {

                const encryptedPassword = await bcrypt.hash(password, 10);
                const consignor = new Consignor({ ...req.body, name, email, phone, address, aadhar, password: encryptedPassword });

                await consignor.save();

                return responder.success(res, { message: "Account Created Successfully!", consignor }, 201);
            }


        } catch (error) {

            return responder.error(res, error.message, 400);
        }
    },

    login: async (req, res) => {
        try {
            const { email, password, role } = req.body;
            if (!email || !password) {
                return responder.error(res, "Email or Password not present", 400);
            }
            if (role === "Admin") {
                var user = await Admin.findOne({ email });
            }
            else if (role === "Consignor") {
                var user = await Consignor.findOne({ email });
            }

            if (!user) {
                return responder.error(res, "User not found", 400);
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                const maxAge = 3 * 60 * 60;
                const token = await user.generateAuthToken();
                const data = { userId: user.id, accessToken: token, role: user.role, name: user.name, email: user.email, phone: user.phone, address: user.address, aadhar: user.aadhar };
                return responder.success(res, { message: "Login Successfully", data: data }, 201);

            }

            return responder.error(res, "Unauthorized access", 400);


        } catch (error) {
            return responder.error(res, error.message, 400);
        }
    },

    logout: async (req, res) => {
        try {
            // console.log("logout")
            res.locals.user.tokens = res.locals.user.tokens.filter((elem) => {
                return elem.token != res.locals.token;
            })
            // console.log(res.locals.user.tokens)

            await res.locals.user.save();

            return responder.success(res, { message: "Logout successfuly" }, 201);
        } catch (error) {
            return responder.error(res, error.message, 400);
        }
    },

}



module.exports = controller;