const express = require("express");
const { products: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/:id", ctrlWrapper(ctrl.getById));
router.post("/", ctrlWrapper(ctrl.add));
router.put("/:id", ctrlWrapper(ctrl.updateById));
router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
