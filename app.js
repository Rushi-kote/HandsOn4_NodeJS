const express = require("express");
const morgan = require("morgan");
const Router = require("./Router/Router");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/auth",Router);



module.exports = app;