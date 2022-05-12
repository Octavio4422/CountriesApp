const { Country } = require("../db");
const { apiToDb } = require("./apiToDb");

async function idFinder(id) {
  await apiToDb();
  const response = await Country.findByPk(id);

  if (response === null) {
    throw "No match results";
  } else {
    return response;
  }
}

module.exports = { idFinder };
