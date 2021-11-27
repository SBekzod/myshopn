const http = require("http");
const moment = require("moment");
const express = require("express");
const router = require("./router");
const cors = require("cors");
console.log("The server started at", moment.utc().format());

// build express server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);

const server = http.createServer(app);
const port = 3003;
server.listen(port, function () {
  console.log("Your server is running on port: ", port);
});
