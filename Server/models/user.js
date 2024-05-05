const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  plants: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      age: { type: String, required: true },
      watering: [],
      plantedDate: { type: Date, required: true },
      image: { type: String, required: true },
      health: { type: Object },
    },
  ],
  bookMarks: [],
  posts: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
