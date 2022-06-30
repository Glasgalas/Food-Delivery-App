const { Order } = require("../../models");

const getAll = async (req, res) => {
  const result = await Order.find();

  res.json({
    status: "success",
    code: 200,
    message: "Orders received",
    data: {
      result,
    },
  });
};

module.exports = getAll;
