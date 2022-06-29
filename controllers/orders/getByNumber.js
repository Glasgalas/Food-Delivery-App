const { Order } = require("../../models");
const { NotFound } = require("http-errors");

const getByNumber = async (req, res) => {
  const { number } = req.body;
  const result = await Order.findOne({ number });
  if (!result) {
    throw new NotFound(`Order with number ${number} not found`);
  }

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
