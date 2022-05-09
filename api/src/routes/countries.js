const { Router } = require("express");
const { Country } = require("../db");
const router = Router();
const axios = require("axios");

router.get("/", async(req, res, next) => {
  // const { name } = req.query;
  const response = await apiToDb();
  try {
    res.json(response);
  } catch (e) {
    next(e);
  }
});

async function apiToDb(){
  let fetchCountries = await axios.get("https://restcountries.com/v3/all");

  let allCountries = fetchCountries.data;

  allCountries.forEach((c) => {
    Country.create({
      id: c.cca3,
      name: c.name.common,
      flags: c.flags[0],
      region: c.region,
      capital: c.capital ? c.capital[0] : "Doesnt have",
      subregion: c.subregion,
      area: c.area,
      population: c.population,
    });

    const response = await Country.findAll();
    console.log(response)
  });
};

module.exports = router;
