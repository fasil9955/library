
const mongoose = require("mongoose");

const addbookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "title required"],
      unique: true,
    },
    author: {
      type: String,
      required: [true, "author required"],
    },
    genre: {
      type: String,
      required: [true, "genre required"],
    },
   
  });


  module.exports = mongoose.model("books", addbookSchema);