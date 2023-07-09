const userModel = require("../models/usersModel.js");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(200).json({ status: false, message: "user already exist" });
    }
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ status: true, message: newUser });
  } catch (error) {
    console.log(`REgister error ${error}`);
    res.status(500).json({ status: false, message: "register error" });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).json({ status: false, message: "user does not exist's" });
    }
    const cmpPwd = await bcrypt.compare(password, user.password);
    if (!cmpPwd) {
      res.status(404).json({ status: false, message: "password invalid" });
    }
    const token = await jsonwebtoken.sign(
      { id: user.id },
      process.env.TOKEN_JWT,
      { expiresIn: "1d" }
    );
    res.status(200).json({ status: true, message: user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "login error" });
  }
};

const authController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    if (!user) {
      res.status(404).json({
        status: false,
        message: "No user found",
      });
    } else {
      res.status(200).json({
        status: true,

        data: {
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "no data found",
    });
  }
};

module.exports = { registerController, loginController, authController };
