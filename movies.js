const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movies = new Schema({
  title: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    default: 4,
  },
});

const mov = mongoose.model("movies", movies);

module.exports = mov;
