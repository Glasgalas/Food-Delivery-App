const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = Schema(
  {
    name: {
      type: String,
      requiered: true,
    },
    imageURL: {
      type: String,
      requiered: true,
    },
    price: {
      type: Number,
      requiered: true,
    },
    provider: {
      type: String,
      requiered: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = Product;
