const express = require("express");
const authCtrl = require("./../controllers/authCtrl");
const postCtrl = require("./../controllers/postCtrl");

const postRoutes = express.Router();

// non-paramterized routes
postRoutes
  .route("/api/posts")
  .get(authCtrl.hasAuthentication, postCtrl.list)
  .post(authCtrl.hasAuthentication, postCtrl.create);

// parameterized routes
postRoutes
  .route("/api/posts/:postId")
  .get(authCtrl.hasAuthentication, postCtrl.read)
  .put(authCtrl.hasAuthentication, authCtrl.hasAuthorization, postCtrl.update)
  .delete(
    authCtrl.hasAuthentication,
    authCtrl.hasAuthorization,
    postCtrl.remove
  );

// reactions
postRoutes
  .route("/api/posts/:postId/reactions")
  .put(authCtrl.hasAuthentication, postCtrl.update);

// comments
postRoutes
  .route("/api/posts/:postId/comments")
  .put(authCtrl.hasAuthentication, postCtrl.update);

// param routes-handler
postRoutes.param("postId", postCtrl.postById);

module.exports = postRoutes;
