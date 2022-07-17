const express = require("express");

const router = express.Router();

router.get("/getAll", (req, res) => {
  res.json("hello");
});

module.exports = router;
