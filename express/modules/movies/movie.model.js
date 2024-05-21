// day 35 - mongoose schema and model

// structure of data of single movie

// schema
// validation/constraints
// model

// day 39 - Movies API
const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    duration: { type: String, required: true },
    synopsis: { type: String },
    poster: { type: String, required: true },
    releaseDate: { type: Date, required: true, default: Date.now() },
    endDate: { type: Date, required: true, default: Date.now() },
    seats: { type: Number, required: true, default: 0 },
    // To Do {reference with user}
    // createdBy : {type:String}
  },
  { timestamps: true }
);

module.exports = model("Movie", movieSchema);
