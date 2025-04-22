const { error } = require("console");
const jwt = require("jsonwebtoken");
const jwt_secret = "supersecretkey";

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({
      error: "No Token Provided",
    });

  const token = authHeader.split(" ");
  jwt.verify(token, jwt_secret, (err, user) => {
    if (err)
      return res.status(403).json({
        err: "Invalid token",
      });
    req.user = user;
    next();
  });
};
