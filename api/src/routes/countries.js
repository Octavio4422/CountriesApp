const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {});

router.get("/:id", (req, res, next) => {});

router.get("/", (req, res, next) => {
  const { name } = req.query;
});

module.exports = router;
