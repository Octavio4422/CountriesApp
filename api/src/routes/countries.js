const { Router, response } = require("express");
const {apiToDb} = require("../functions/apiToDb")
const router = Router();
const { Op } = require("sequelize");
const { Country } = require("../db");


router.get("/", routerFunction);

function routerFunction(req, res, next) {
  const { name } = req.query;

  if (!name) {
    apiToDb().then((response) => {
      res.status(200).json(response);
    });
  }

  if (name) {
    queryFinder(name)
    .then((response) => {
      res.status(200).json(response);
    })
  }
}

//Anda a saber que es este error de archivos

async function queryFinder(query){
  
  const response = await Country.findAll({
    where:{
      [Op.substring]: query,
    }
  });
  return response;
}

module.exports = router;
