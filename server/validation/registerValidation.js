const { check } = require("express-validator");
const { User } = require("../models/index");
const RegisterValidation = (req, res) => {
  return [
    check("full_name").notEmpty().withMessage("Full Name is Required"),
    check("phone_number")
      .notEmpty()
      .withMessage("Phone Number is Required")
      .custom(async (value, { req }) => {
        try {
          const user = await User.findOne({ where: { phone_number: value } });
          if (user) throw { message: "Phone Number Already Exists" };
          return Promise.resolve();
        } catch (error) {
          return Promise.reject("Phone Number Already Exists");
        }
      }),
    check("email")
      .notEmpty()
      .withMessage("Email is Required")
      .isEmail()
      .withMessage("Email Format Invalid")
      .custom((value, { req }) => {
        return User.findOne({ where: { email: value } })
          .then((user) => {
            if (user) throw { message: "Email Already Exists" };
            return Promise.resolve();
          })
          .catch((error) => {
            return Promise.reject(error.message);
          });
      }),
    check("password").notEmpty().withMessage("Password is Required"),
    check("address")
      .notEmpty()
      .withMessage("Address is Required")
      .custom((value, { req }) => {
        if (!req.files || req.files === null)
          return Promise.reject("Image is Required");
        return Promise.resolve();
      }),
    check("citizenship_no")
      .notEmpty()
      .withMessage("Citizenship Number is Required")
      .custom(async (value, { req }) => {
        try {
          const user = await User.findOne({ where: { citizenship_no: value } });
          if (user) throw { message: "Citizenship Number Already Exists" };
          return Promise.resolve();
        } catch (error) {
          return Promise.reject("Citizenship Number Already Exists");
        }
      }),
  ];
};

module.exports = RegisterValidation;
