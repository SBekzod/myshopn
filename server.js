const http = require("http");
const moment = require("moment");
const express = require("express");
const router = require("./router");
const cors = require("cors");
const cookieParser = require('cookie-parser');
console.log(`The ${process.env.NODE_ENV} server started at ${moment.utc().format()}`);

const {resolve} = require("path");
const {config} = require("dotenv");
config({path: resolve(process.env.NODE_ENV === 'production' ? "./.env.prod" : "./.env.dev")});

// build express server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(cors());

app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("Your server is running on port: ", port);
});