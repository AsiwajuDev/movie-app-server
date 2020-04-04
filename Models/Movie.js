const mongoose = require("mongoose");
const movieSchema = mongoose.Schema;

const Movie = new movieSchema(
  {
    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movies", Movie);
