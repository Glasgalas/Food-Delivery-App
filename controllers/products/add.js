const { Product } = require("../../models");

const add = async (req, res) => {
  const result = await Product.create(req.body);

  res.json({
    status: "success",
    code: 201,
    message: "Product added",
    data: {
      result,
    },
  });
};

module.exports = add;
