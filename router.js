const fs = require("fs");
const express = require("express");
const router = express.Router();

// create data for our server
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

router.get("/", (req, res) => {
  console.log("/");
  res.end("you are connected");
});
router.get("/home", (req, res) => {
  console.log("/home");
  res.render("home", { user: user });
});
router.get("/users", (req, res) => {
  console.log("/users");
  res.end("you are in users page");
});
router.get("/shop", (req, res) => {
  console.log("/shop");
  res.end("you are in our shop page");
});

module.exports = router;
