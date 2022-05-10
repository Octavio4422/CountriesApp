const axios = require("axios");
const { Country } = require("../db");


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
      capital: allCountries[i].capital? allCountries[i].capital[0]: "Doesnt have",
      subregion: allCountries[i].subregion,
      area: allCountries[i].area,
      population: allCountries[i].population,
    });
  }

  const response = await Country.findAll();
  return response;
}

module.exports = { apiToDb };
