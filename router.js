const fs = require("fs");
const express = require("express");
const userControllers = require("./controllers/userController");
const router = express.Router();

// USER CONTROLLERS
router.get("/", userControllers.getAllUsersData);
router.get("/create", userControllers.prepareNewUserData);
router.post("/signUp", userControllers.createNewUserData);
router.get("/logout", userControllers.getLogout);
router.post("/login", userControllers.getLogIn);
router.get('/only-verified', userControllers.validateUser, userControllers.getUsersOnlyData);


// AUTHOR CONTROLLERS
// router.get("/author", userControllers.getAuthorData);

module.exports = router;
