const moment = require("moment");
const fs = require("fs");
const express = require('express');
console.log("The server started at", moment.utc().format());

// create data for our server
const user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    user = JSON.parse(data);
  }
});







