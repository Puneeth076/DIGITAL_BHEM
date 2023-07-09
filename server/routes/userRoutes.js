const express = require('express');
const { registerController, loginController, authController } = require('../controllers/loginRegisterControler.js');
const { authMiddleware } = require('../middlewares/authMiddleware.js');

const route = express.Router();

route.route("/login").post(loginController)
route.post("/register", registerController)
route.post("/getUserData", authMiddleware, authController);

module.exports = route;