const { Country } = require("../db");
const { Op } = require("sequelize");
const { apiToDb } = require("./apiToDb");

async function queryFinder(query) {
  await apiToDb();
  let lowerQuery = query.toLowerCase();
  let upperQuery = query.charAt(0).toUpperCase() + query.slice(1).toLowerCase();
  console.log(upperQuery);
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

  if (!response.length) {
    throw "No match results";
  } else {
    return response;
  }
}

module.exports = { queryFinder };
