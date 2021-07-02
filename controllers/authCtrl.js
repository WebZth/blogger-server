const User = require("./../models/User.model");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const config = require("./../utils/config");

// signin user
const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    // user not found
    if (!user) {
      return res.status(401).send({ error: "⚠️User not found" });
    } else {
      // authenticate user
      const isMatch = await user.authenticate(req.body.password);
      if (!isMatch) {
        return res
          .status(401)
          .send({ error: "⚠️Email and password dont match" });
      } else {
        // assign jwt
        const token = jwt.sign({ _id: user._id }, config.jwtSecret);
        return res.send({
          token,
          user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            name: user.name,
          },
        });
      }
    }
  } catch (error) {
    return res.status(401).send({ error: "⚠️Could not sign-in" });
  }
};

// hasAuthentication->is signedin
const hasAuthentication = expressJwt({
  secret: config.jwtSecret,
  requestProperty: "auth",
  algorithms: ["HS256"],
});

// hasAuthorization
const hasAuthorization = (req, res, next) => {
  const authorized =
    // userRoutes authorization
    (req.user &&
      req.auth &&
      req.user._id.toString() === req.auth._id.toString()) ||
    // postRoutes authorization
    (req.post &&
      req.auth &&
      req.post.user._id.toString() === req.auth._id.toString());
  if (!authorized) {
    return res.status(403).send({ error: "🔴User is not authorized" });
  }
  next();
};

module.exports = { signin, hasAuthentication, hasAuthorization };
