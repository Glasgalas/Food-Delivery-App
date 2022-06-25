const { Product } = require("../../models");

const removeById = async (req, res) => {
  const { id } = req.params;

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
