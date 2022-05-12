const { Country } = require("../db");

async function idFinder(id) {
  const response = await Country.findByPk(id);

  if (response === null) {
    throw "No match results";
  } else {
    return response;
  }
}

module.exports = { idFinder };
