exports.adminDashboard = (req, res) => {
  res.json({
    message: "welcome to the admin dashboard",
  });
};

exports.ManagerDashboard = (req, res) => {
  res.json({
    message: "welcome to the Manager dashboard",
  });
};

exports.UserDashboard = (req, res) => {
  res.json({
    message: "welcome to the User dashboard",
  });
};
