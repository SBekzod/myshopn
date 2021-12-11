const fs = require("fs");
const express = require("express");
const userControllers = require("./controllers/userController");
const router = express.Router();

// USER CONTROLLERS
router.get("/", userControllers.getUserMainData);
router.get("/contact", userControllers.getContactData);
router.post("/call-me", userControllers.postControllerData);


// AUTHOR CONTROLLERS
// router.get("/author", userControllers.getAuthorData);

module.exports = router;
