const { Product } = require("../../models");

const updateById = async (req, res) => {
  const { id } = req.params;

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
