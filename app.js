const express = require("express");
const app = express();
const https = require("https");

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Requiring file system to use local files
const fs = require("fs");

// Creating object of key and certificate
// for SSL
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
  };
    
  // Creating https server by passing
  // options and app object
  https.createServer(options, app)
  .listen(3000, function (req, res) {
    console.log("Server started at port 3000");
  });