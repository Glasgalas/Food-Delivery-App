const { User } = require("../../models");
const { Conflict } = require("http-errors");

const add = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
  const result = await User.create(req.body);
  res.json({
    status: "success",
    code: 201,
    message: "New user added",
    data: {
      result,
    },
  });
};

module.exports = add;
