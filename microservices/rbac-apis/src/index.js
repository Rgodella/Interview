const express = require("express");
const authRoutes = require("../src/routes/authRoutes");
const dashboardRoutes = require("../src/routes/dashboardRoutes");
const errorHandler = require("../src/middleware/errorHandler");
const { error } = require("console");

//top level function
const app = express();

app.use(express.json());

app.use("/", authRoutes);
app.use("/", dashboardRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Resource Not Found",
  });
});

//ERROR HANDLER
app.use(errorHandler);
app.listen(8000, () => console.log("server is listening on port 8000"));
