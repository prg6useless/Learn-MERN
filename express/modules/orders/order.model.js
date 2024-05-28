// day 35 - mongoose schema and model

// structure of data of single movie

// schema
// validation/constraints
// model

// day 42 - Wrapping up Backend
const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const orderSchema = new Schema(
  {
    id: { type: String, unique: true, required: true },
    buyer: { type: ObjectId, ref: "User", required: true },
    total: { type: Number, required: true },
    products: [
      {
        quantity: { type: Number, required: true, default: 1 },
        price: { type: Number, required: true },
        amount: { type: Number, required: true },
        movie: { type: ObjectId, ref: "Movie", required: true },
      },
    ],
    type: {
      type: String,
      enum: ["Cash On Delivery", "Online"],
      default: "Online",
    },
    status: {
      type: String,
      enum: ["completed", "pending", "failed", "cancelled"],
      default: "pending",
    },
    approvedBy: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);
