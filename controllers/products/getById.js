const { Product } = require("../../models");
const { NotFound } = require("http-errors");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  if (!result) {
    throw new NotFound(`Product with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "Product founded",
    data: {
      result,
    },
  });
};

module.exports = getById;
