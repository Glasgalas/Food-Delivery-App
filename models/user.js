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
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    }),
  phone: Joi.string().required().pattern(codeRegexp).messages({
    "string.pattern.base":
      "Phone number fails to match the required pattern: +(38) 096-898-1234",
  }),
  address: Joi.string().required(),
});

const User = model("user", userSchema);

module.exports = { User, joiSchema };
