const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userData = require("../user_Role");
const { error } = require("console");

const jwt_secret = "supersecretkey";

function generateToken(user) {
  console.log("indside token");
  return jwt.sign({ id: user.id, role: user.role }, jwt_secret, {
    expiresIn: "1h",
  });
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("user", username, password);
    console.log("usedata", userData);
    const user = userData.find((u) => u.username === username);
    console.log("user12", user);

    console.log("user.pwd", user.password);
    if (!user) {
      return res.status(401).json({
        error: "Invalid Credentials",
      });
    }
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error: "Interal Server error",
    });
  }
};
