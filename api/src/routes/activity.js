const { Router } = require("express");
const { activityCreator } = require("../functions/activityCreator")
const router = Router();

router.post("/", routerFunction);

async function routerFunction(req, res, next) {
  const {countries, name, difficulty, duration, season } = req.body;
  const fixedName = name.trim();
  
  try {
    const response = await activityCreator(countries, fixedName, difficulty, duration, season)
    res.status(201).json(response)
  } catch (error) {
    next(error);
  }
}

module.exports = router;
