const { validationResult } = require("express-validator");
const { createToken } = require("../utils/helpers");
const path = require("path");
const bcrypt = require("bcrypt");
const { User } = require("../models/index");
const { create_file } = require("../utils/helpers");
const AuthController = {
  login: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        throw {
          code: 422,
          detail: errors,
        };

      const { email } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user)
        throw {
          status: 404,
          detail: ["User Not Found"],
        };
      const payload = user.id;
      const access = createToken("ACCESS_TOKEN_SECRET", payload);
      const refresh = createToken("REFRESH_TOKEN_SECRET", payload);

      res
        .cookie("X-Access-Token-Drive", access, {
          httpOnly: true,
          maxAge: 1000 * 60 * 15, //15 mins
        })
        .cookie("X-Refresh-Token-Drive", refresh, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7, //7days
        });

      return res.status(201).json({
        status: "success",
        detail: user,
      });
    } catch (error) {
      const status = error.code ? error.code : 500;
      return res.status(status).json({
        detail: error.detail ? error.detail : error,
        status: "error",
      });
    }
  },

  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        throw {
          code: 422,
          detail: errors,
        };
      }
      const {
        full_name,
        phone_number,
        email,
        password,
        address,
        citizenship_no,
      } = req.body;

      // hash password
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);

      const img_save_location = path.join(
        __dirname,
        "../",
        "public",
        "uploads",
        "user"
      );
      const img_name = await create_file(req.files.image, img_save_location);

      const register_user = await User.create({
        full_name,
        phone_number,
        email,
        password: hash,
        address,
        citizenship_no,
        image: img_name,
      });
      if (!register_user)
        throw {
          detail: ["Error While Registration"],
        };

      return res.status(201).json({
        status: "success",
        detail: register_user,
      });
    } catch (error) {
      const status = error.code ? error.code : 500;

      return res.status(status).json({
        status: "error",
        detail: error.detail ? error.detail : error,
      });
    }
  },
  logout: (req, res) => {
    res.clearCookie("X-Access-Token-Drive", {
      httpOnly: true,
    });
    res.clearCookie("X-Refresh-Token-Drive", {
      httpOnly: true,
    });
    return res.status(200).json({
      status: "success",
      detail: {
        msg: "Logged Out",
        cookies: req.cookies,
      },
    });
  },
};
module.exports = AuthController;
