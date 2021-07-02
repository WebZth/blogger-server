const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
// custom middlewares
const customErrorHandler = require("./utils/customErrorHandler");
const unknownEndpointError = require("./utils/unknownEndpointError");
// routes
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

// instantiate express app
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", postRoutes);
app.use(customErrorHandler);
app.use(unknownEndpointError);

module.exports = app;
