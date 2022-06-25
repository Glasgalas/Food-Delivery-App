const { isValidObjectId } = require("mongoose");
const { NotFound } = require("http-errors");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  const result = isValidObjectId(id);
  if (!result) {
    const error = new NotFound("Invalid id");
    return next(error);
  }
  next();
};

module.exports = isValidId;
