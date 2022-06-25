const { Product } = require("../../models");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);

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
