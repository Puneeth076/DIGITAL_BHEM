const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const routes = require("./routes/userRoutes.js");
const connectDB = require("./config/db.js");
const route = require("./routes/appointments.js");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/v1/users/", routes);
app.use("/api/v1/appointments/", route);

app.get("/", (req, res) => {
  res.json({ name: "Puneeth" });
});

app.listen(
  process.env.PORT,
  console.log(`Server is running on port ${process.env.PORT}`)
);
