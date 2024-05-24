// day 35 - mongoose schema and model

// structure of data of single movie

// schema
// validation/constraints
// model

// day 39 - Movies API
const { Schema, model } = require("mongoose");

const { ObjectId } = Schema.Types;

const movieSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    duration: { type: String, required: true },
    synopsis: { type: String },
    poster: { type: String, required: true },
    releaseDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date, required: true },
    seats: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true },
    // TODO {reference with user}
    // Day 40 - Movies and Other APIs
    createdBy: { type: ObjectId, ref: "User" },
    updatedBy: { type: ObjectId, ref: "User" }, //ref:"User" referring to the Users collection
  },
  { timestamps: true }
);

module.exports = model("Movie", movieSchema);
