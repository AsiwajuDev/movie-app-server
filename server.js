//Import Dependencies Package
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Initialize Objects
const app = express();
const Port = 5000;

//Use Objects to create server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//Endpoint Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(Port, () => console.log(`Server Running on ${Port}`));
