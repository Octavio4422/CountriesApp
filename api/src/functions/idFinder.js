const { Country, Activity } = require("../db");
const { apiToDb } = require("./apiToDb");

async function idFinder(id) {
  await apiToDb();
  const response = await Country.findByPk(id,{
    include: Activity,
  });
 
  if (response === null) {
    throw "No match results";
  } else {
    return response;
  }
}

module.exports = { idFinder };
