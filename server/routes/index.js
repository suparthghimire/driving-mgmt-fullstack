const express = require("express");
const router = express.Router();

const IndexController = require("../controllers/IndexController");

router.get("/package/:packageId", IndexController.get_single_package);
router.get("/package", IndexController.get_packages);

module.exports = router;
