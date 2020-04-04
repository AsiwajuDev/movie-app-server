//Import Dependencies Package
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//DB Connection
const db = require("./Config/Keys").mongoURI;

//Import Router
const movieRouter = require("./Routes/Movie-Router");

//Initialize Express Objects
const app = express();

//Use Objects to create server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//Coonect DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//Endpoint Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", movieRouter);

//Configure Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on ${port}`));
