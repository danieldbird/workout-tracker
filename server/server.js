const express = require("express");
const cors = require("cors");

const server = express();

const exerciseRoutes = require("./routes/exercises");

server.use(
  cors({
    origin: "http://localhost:3000",
  })
);

server.use("/api/v1/exercises", exerciseRoutes);

module.exports = server;
