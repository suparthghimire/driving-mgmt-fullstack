const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const LoginValidation = require("../validation/loginValidation");
const RegisterValidation = require("../validation/registerValidation");

router.post("/login", LoginValidation(), AuthController.login);
router.get("/logout", LoginValidation(), AuthController.logout);
router.post("/register", RegisterValidation(), AuthController.register);
module.exports = router;
