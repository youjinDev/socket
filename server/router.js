const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("서버 가동중");
});

module.exports = router;
