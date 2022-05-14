const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const countriesRoute = require('./countries');
const activityRoute = require('./activity');

router.use('/countries', countriesRoute);
router.use('/activity', activityRoute);


module.exports = router;
