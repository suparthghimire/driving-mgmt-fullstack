const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/profile", UserController.index);
router.post("/enroll", UserController.enroll_course);
router.get("/package", UserController.get_enrolled_packages);
module.exports = router;
