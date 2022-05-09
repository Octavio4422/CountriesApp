const { Router } = require("express");
const { Country } = require("../db");
const router = Router();
const axios = require('axios')**

router.get("/:id", (req, res, next) => {
    res.send("soy get de countries con params");
  });

module.exports = router;