module.exports = {
  roles: [
    {
      role: "admin",
      permissions: [
        "view_admin_dashboard",
        "view_manager_dashboard",
        "view_user_dashboard",
        "manage_users",
        "manage_roles",
      ],
    },
    {
      role: "manager",
      permissions: [
        "view_manager_dashboard",
        "view_user_dashboard",
        "manage_team",
      ],
    },
    {
      role: "user",
      permissions: ["view_user_dashboard"],
    },
  ],
};
