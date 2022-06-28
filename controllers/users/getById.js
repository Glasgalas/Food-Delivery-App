const { User } = require("../../models");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await User.findById(id);

  res.json({
    status: "success",
    code: 200,
    message: "User founded",
    data: {
      result,
    },
  });
};

module.exports = getById;
