const express = require("express");
const { orders: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");
const { isValidId, validation } = require("../../middlewares");
const { joiOrderSchema } = require("../../models/order");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validation(joiOrderSchema), ctrlWrapper(ctrl.add));

module.exports = router;
