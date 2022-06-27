const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = require("./index");

dotenv.config();
const { DB_HOST, PORT = 3030 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
