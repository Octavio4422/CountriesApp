const { Router, response } = require("express");
const { Country } = require("../db");
const router = Router();
const axios = require("axios");

router.get("/", routerFunction);

function routerFunction(req, res, next) {
  const { name } = req.query;

  if (!name) {
    apiToDb().then((response) => {
      res.status(200).json(response);
    });
  }

  if (name) {
    res.status(200).json(name);
  }
}

async function apiToDb() {
  const verifyDb = await Country.findAll();
  if (verifyDb.length) {
    return verifyDb;
  }

  let fetchCountries = await axios.get("https://restcountries.com/v3/all");

  let allCountries = fetchCountries.data;

  for (let i = 0; i < allCountries.length; i++) {
    await Country.create({
      id: allCountries[i].cca3,
      name: allCountries[i].name.common,
      flags: allCountries[i].flags[0],
      region: allCountries[i].region,
      capital: allCountries[i].capital
        ? allCountries[i].capital[0]
        : "Doesnt have",
      subregion: allCountries[i].subregion,
      area: allCountries[i].area,
      population: allCountries[i].population,
    });
  }

  const response = await Country.findAll();
  return response;
}

// function validateQuery(query){
  //   if(query === undefined){
    //     return next();
    //   }
    //   return query;
    // }

    // apiToDb()
    // .then((response) => {return response.find((r) => r.name === name)})
    // .then((pais) => validateQuery(pais))
    // .then((pais) => res.send(pais))
    
    module.exports = router;
    