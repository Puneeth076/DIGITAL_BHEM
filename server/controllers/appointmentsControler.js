const appointmentsModel = require("../models/appointmrntModel.js");

const setAppointment = async (req, res) => {
  try {
    const { name, date, time } = req.body;

    const data = new appointmentsModel({
      doctorName: name,
      date,
      time,
    });

    await data.save();
    res.json({ status: true, message: "appointment booked" }).status(200);
    return true;
  } catch (error) {
    console.log(error);
    res
      .json({ status: false, message: "error in booking appointment" })
      .status(400);
    return false;
  }
};

const getAppointments = async (req, res) => {
  try {
    const data = await appointmentsModel.find({});
    if (!data) {
      res.json({ status: false, message: "No data found" });
    }
    res.json({ status: true, message: data });
  } catch (error) {
    res.json({ status: false, message: "Error in fetching data" });
  }
};

module.exports = { setAppointment, getAppointments };
