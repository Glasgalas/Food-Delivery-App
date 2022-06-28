const { Order } = require("../../models");

const getByNumber = async (req, res) => {
  const { number } = req.body;
  const result = await Order.findOne({ number });

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Order founded",
    data: {
      result,
    },
  });
};

module.exports = getByNumber;
