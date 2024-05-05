const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

//middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true, }));

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: false, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

module.exports = app;