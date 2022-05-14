const { Country } = require("../db");
const { Op } = require("sequelize");
const { apiToDb } = require("./apiToDb");

async function queryFinder(query) {
  await apiToDb();
  let lowerQuery = query.toLowerCase();
  let upperQuery = query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();

  const lowerResponse = await Country.findAll({
    where: {
      name: {
        [Op.substring]: lowerQuery,
      },
    },
  });

  const upperResponse = await Country.findAll({
    where: {
      name: {
        [Op.substring]: upperQuery,
      },
    },
  });

  const response = [...lowerResponse, ...upperResponse];

  response.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  if (!response.length) {
    throw "No match results";
  } else {
    return response;
  }
}

module.exports = { queryFinder };
