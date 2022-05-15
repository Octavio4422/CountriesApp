const { Country, Activity } = require("../db");
const { apiToDb } = require("./apiToDb");

async function idFinder(id) {
  await apiToDb();
  let pais = await Country.findByPk(id);
  const actividad = await pais.getActivities();
  pais = [pais.toJSON()]
  const actividadJson = actividad.map(a => a.toJSON())

  const response = [ ...pais, ...actividadJson]
  
  if (response === null) {
    throw "No match results";
  } else {
    return response;
  }
}

module.exports = { idFinder };
