const express = require("express");
const {
  setAppointment,
  getAppointments,
} = require("../controllers/appointmentsControler.js");
const route = express.Router();

route.post("/", setAppointment);
route.get("/", getAppointments);
module.exports = route;
