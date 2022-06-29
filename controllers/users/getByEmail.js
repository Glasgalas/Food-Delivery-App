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

  // let result;
  // if (value.includes("@")) {
  //   console.log("find by email");
  //   const user = await User.findOne({ email: value });
  //   if (!user) {
  //     throw new NotFound(`Contact with email=${value} not found`);
  //   }
  //   result = user.orders;
  // } else {
  //   console.log("find by phone");
  //   const user = await User.findOne({ phone: value });
  //   if (!user) {
  //     throw new NotFound(`Contact with phone=${value} not found`);
  //   }
  //   result = user.orders;
  // }

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
