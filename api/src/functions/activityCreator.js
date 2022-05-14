const { TouristActivity } = require("../db");

async function activityCreator(countries, name, difficulty, duration, season) {
  const [activity, created] = await TouristActivity.findOrCreate({
    where: { name: name },
    defaults: {
      difficulty,
      duration,
      season,
    },
  });

  
  if (created) {
    return activity;
  } else {
    throw "The activity that you sumbit already exist";
  }
}

module.exports = { activityCreator };
