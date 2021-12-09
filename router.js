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

    res.render("home", { user: user });
});
router.get("/project", (req, res) => {

    res.render("project", { user: user });
});
router.get("/contact", (req, res) => {

    res.render("contact", { user: user });
});
router.post("/call-me", (req, res) => {
    console.log(`req.body ::: `, req.body);
    const data = req.body;
    fs.writeFileSync("database/contact_request.json", JSON.stringify(data));
    res.json({ state: "success" });
});

module.exports = router;