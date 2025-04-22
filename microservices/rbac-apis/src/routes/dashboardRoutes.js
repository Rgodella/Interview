const express = require("express");
const router = express.Router();

const {
  adminDashboard,
  ManagerDashboard,
  UserDashboard,
} = require("../Controllers/dashboardController");

const authenticate = require("../middleware/authenticate");
const authorize = require("../middleware/authorize");

router.get(
  "/admin-dashboard",
  authenticate,
  authorize(["admin"]),
  adminDashboard
);

router.get(
  "/manager-dashboard",
  authenticate,
  authorize(["admin", "manager"]),
  ManagerDashboard
);

router.get(
  "/user-dashboard",
  authenticate,
  authorize(["user", "manager"]),
  UserDashboard
);

module.exports = router;
