const express = require("express");
const {connectingDatabase} = require('./db/index.js')
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

//middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true, }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: false, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//Routes Import
const userRouter = require('./routes/user.routes.js')

//rotes declaration
app.use("/api/v1/users", userRouter)

module.exports = app;