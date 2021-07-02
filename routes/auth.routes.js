const express = require("express");
const authCtrl = require("./../controllers/authCtrl");
const authRoutes = express.Router();

authRoutes.route("/auth/signin").post(authCtrl.signin);

module.exports = authRoutes;
