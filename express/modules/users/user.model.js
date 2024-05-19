// model -> controller -> api MVC pattern

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({})

// const user = mongoose.model("User", userSchema);

// module.exports = user;

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
      // validate: {
      //   validator: (v) => {
      //     return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(v);
      //   },
      //   message :(props)=> `${props.value} is not a valid email`
      // },
    },
    password: { type: String, required: true, select: false }, // select : false indicates when select operation, password is not returned
    roles: {
      type: Array,
      default: ["user"],
      required: true,
    },
    image: { type: String },
    isActive: { type: Boolean, required: true, default: true },
    otp: { type: String },
    isEmailVerified: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);

// Schema + Validation = Model
