const mongoose = require("mongoose");


const Todo = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    done: {
        type: Boolean,
        required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);