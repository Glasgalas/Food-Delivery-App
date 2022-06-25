const { Product } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const updateById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  const result = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Product edited",
    data: {
      result,
    },
  });
};

module.exports = updateById;
