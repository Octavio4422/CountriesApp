const { Router } = require("express");
const { TouristActivity } = require("../db");
const router = Router();

router.post("/",routerFunction);

async function routerFunction(req, res, next) {
  const { name, difficulty, duration, season } = req.body;
  const [activity, created] = await TouristActivity.findOrCreate({
    where:{ name: name },
    defaults: {
        difficulty,
        duration,
        season 
    }
  });

  if(created){
    res.status(201).json(activity);
  }
}

module.exports = router;


