const express = require("express");
const signUpController = require("../Controllers/SignUpController");
const LoginController =require("../Controllers/LoginController");

const Router = express.Router();

Router.route("/sign-up").post(signUpController.checkUser,signUpController.signUp);
Router.route("/login").post(LoginController.login);


module.exports = Router;