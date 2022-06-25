const { Product } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const removeById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }

  const result = await Product.findByIdAndRemove(id);
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Product deleted",
    data: {
      result,
    },
  });
};
module.exports = removeById;
