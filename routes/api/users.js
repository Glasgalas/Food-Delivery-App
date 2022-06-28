const express = require("express");
const { users: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");
const { isValidId, validation } = require("../../middlewares");
const { joiSchema } = require("../../models");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getByEmail));
router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));
router.post("/", validation(joiSchema), ctrlWrapper(ctrl.add));

module.exports = router;
