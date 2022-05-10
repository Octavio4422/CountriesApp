const { Router } = require("express");
const { Country } = require("../db");
const router = Router();

router.get(routerFunction);

//encontrar la forma de que entre
function routerFunction(req, res, next) {
  const { id } = req.params;
  res.status(200).json(id)
}


module.exports = router;
