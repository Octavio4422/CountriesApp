const { Router } = require("express");
const { activityCreator } = require("../functions/activityCreator")
const router = Router();

router.post("/", routerFunction);

async function routerFunction(req, res, next) {
  const { name, difficulty, duration, season } = req.body;
  
  try {
    const response = await activityCreator(name, difficulty, duration, season)
    res.status(201).json(response)
  } catch (error) {
    next(error);
  }
}

module.exports = router;
