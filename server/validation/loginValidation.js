const { check } = require("express-validator");
const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const LoginValidation = (req, res) => {
  return [
    check("email")
      .notEmpty()
      .withMessage("Email is Required")
      .isEmail()
      .withMessage("Email Format Invalid")
      .custom((value, { req }) => {
        return User.findOne({ where: { email: value } })
          .then((user) => {
            if (!user) throw { message: "Incorrect Email" };
            return Promise.resolve();
          })
          .catch((error) => {
            return Promise.reject(error.message);
          });
      }),
    check("password")
      .notEmpty()
      .withMessage("Password is Required")
      .custom((value, { req }) => {
        const { email } = req.body;
        return User.findOne({ where: { email } })
          .then(async (user) => {
            if (!user) throw { message: "Incorrect Email" };
            const password = user.password;
            const isSame = await bcrypt.compare(value, password);
            if (!isSame) throw { message: "Incorrect Password" };
            return Promise.resolve();
          })
          .catch((error) => {
            return Promise.reject(error.message);
          });
      }),
  ];
};

module.exports = LoginValidation;
