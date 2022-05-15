const { Activity, Country } = require("../db");
const { apiToDb } = require("./apiToDb");
const { Op } = require("sequelize");

async function activityCreator(countries, name, difficulty, duration, season) {
  await apiToDb();
  const fixedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
  const [activity, created] = await Activity.findOrCreate({
    where: { name: fixedName },
    defaults: {
      difficulty,
      duration,
      season,
    },
  });

  for (let i = 0; i < countries.length; i++) {
    const pais = await Country.findOne({
      where: {
        name:{
          [Op.iLike] :countries[i].trim(),
        } 
      },
    });

    if (pais === null) {
      throw "The country entered is not valid, please check the field";
    }

    if (await pais.hasActivity(activity.id)) {
      throw `${pais.name} already has this activity registered, please remove it`;
    } else {
      pais.addActivity(activity);
      return "Activity added succesfuly";
    }
  }
}

module.exports = { activityCreator };
