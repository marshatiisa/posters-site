const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
 featured:{
  type: Boolean,
  require: false,
 }
});

module.exports = mongoose.model("Product", ProductSchema);
