const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const productsRouter = require("./routes/api/products");
const usersRouter = require("./routes/api/users");
const ordersRouter = require("./routes/api/orders");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
// ======swagger
// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDefinition = {
//   openapi: "3.0.0",
//   info: {
//     title: "Express API for JSONPlaceholder",
//     version: "1.0.0",
//     description:
//       "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
//     license: {
//       name: "Licensed Under MIT",
//       url: "https://spdx.org/licenses/MIT.html",
//     },
//     contact: {
//       name: "JSONPlaceholder",
//       url: "https://jsonplaceholder.typicode.com",
//     },
//   },
//   servers: [
//     {
//       url: "http://localhost:3030",
//       description: "Development server",
//     },
//   ],
// };
// const options = {
//   swaggerDefinition,
//   // Paths to files containing OpenAPI definitions
//   apis: ["./routes/*.js"],
// };
// const swaggerSpec = swaggerJSDoc(options);
// ========

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// =====
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// =====

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

module.exports = app;
