const express = require("express");
const userCtrl = require("./../controllers/userCtrl");
const authCtrl = require("./../controllers/authCtrl");

const userRoutes = express.Router();

// non-parameterized routes
userRoutes.route("/api/users").get(userCtrl.list).post(userCtrl.create);

// parameterized routes
userRoutes
  .route("/api/users/:userId")
  .get(authCtrl.hasAuthentication, userCtrl.read)
  .put(authCtrl.hasAuthentication, authCtrl.hasAuthorization, userCtrl.update)
  .delete(
    authCtrl.hasAuthentication,
    authCtrl.hasAuthorization,
    userCtrl.remove
  );

// param route handler
userRoutes.param("userId", userCtrl.userById);

module.exports = userRoutes;
