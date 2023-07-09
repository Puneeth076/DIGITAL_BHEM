const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: [true, "name required"],
  },
  date: {
    type: String,
    required: [true, "email required"],
    default: new Date(),
  },
  time: {
    type: String,
    required: [true, "password required"],
    default: new Date().getHours(),
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const appointmentsModel = mongoose.model("appointments", Schema);
module.exports = appointmentsModel;
