const { Router } = require("express");
const { Country } = require("../db");
const router = Router();

router.get(routerFunction);

//encontrar la forma de que entre
async function routerFunction(req, res, next) {
  const { id } = req.params;
  const fixedId = id.toUpperCase
  
  const response = await Country.findByPk(fixedId);

  if(response === null){
    next();
  }
  if(response){
    res.status(200).json(response);
  }
}


module.exports = router;
