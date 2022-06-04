const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  sellerName: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  oldPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  newPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  brand: {
    type: String,
    required: true,
  },
  cetagory: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
});

//Here Product is name of collection
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
