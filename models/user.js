const { Schema, model } = require("mongoose");
const Joi = require("joi");

const codeRegexp = /^\d{10}$/;

const userSchema = Schema(
  {
    name: {
      type: String,
      requiered: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      requiered: [true, "Email is required"],
    },
    phone: {
      type: String,
      unique: true,
      requiered: [true, "Phone is required"],
    },
    address: {
      type: String,
      requiered: [true, "Address is required"],
    },
    orders: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).message({
    "any.required": "The name field must consist of at least 3 letters",
  }),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    })
    .message({
      "string.base": "Invalid mail",
    })
    .required(),
  phone: Joi.string().required().pattern(codeRegexp).messages({
    "string.pattern.base":
      "Phone number fails to match the required pattern: 0968981234",
  }),
  address: Joi.string()
    .min(3)
    .message({
      "string.base": "The address field must consist of at least 3 letters",
    })
    .required(),
});

const User = model("user", userSchema);

module.exports = { User, joiSchema };
