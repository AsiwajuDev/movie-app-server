const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://movie-app-server:qPyO4M6TcKvECUjC@cluster0-6vgqp.mongodb.net/test",
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error("Connection Error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
