const { Order } = require("../../models");
const { User } = require("../../models");
const moment = require("moment");

const add = async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    products,
    cartTotalQuantity,
    cartTotalAmount,
  } = req.body;

  const shortVal = Math.floor(1000 + Math.random() * 9000);
  const date = moment().format("_DD-MM-YYYY-hh-mm");
  const orderNumber = shortVal.toString().concat(date);

  const user = await User.findOne({ email });
  if (!user) {
    console.log("створюємо нового користувача");
    await User.create({
      name,
      email,
      phone,
      address,
    });
  }
  const oldOrders = user?.orders || [];
  const newOrders = [...oldOrders, orderNumber];

  await User.findOneAndUpdate(
    { email: email },
    { orders: newOrders },
    { new: true }
  );

  const userNew = await User.findOne({ email });

  const result = await Order.create({
    number: orderNumber,
    name,
    email,
    phone,
    address,
    products,
    owner: userNew,
    cartTotalQuantity,
    cartTotalAmount,
  });

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Order successful",
    data: {
      result,
    },
  });
};

module.exports = add;
