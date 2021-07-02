const http = require("http");
const app = require("./express");
const mongoose = require("mongoose");
// access env variables
const config = require("./utils/config");

console.log("🔶Conecting to db");
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("🟢Connected to db");
    http
      .createServer(app)
      .listen(config.port, () =>
        console.log(`🟢Server is running, listening on port ${config.port}`)
      );
  })
  .catch((err) => console.error("🔴Error : ", err));
