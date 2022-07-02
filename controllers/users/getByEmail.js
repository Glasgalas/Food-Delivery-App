const { Order } = require("../../models");
const { User } = require("../../models");
const { NotFound } = require("http-errors");

const getByEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new NotFound(`Contact with email=${email} not found`);
  }
  const result = await Order.find({ email: email });

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Orders founded",
    data: {
      result,
    },
  });
};

module.exports = getByEmail;
