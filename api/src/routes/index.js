const { Router } = require('express');
// Importar todos los routers;
const countriesRoute = require('./countries');
const activityRoute = require('./activity');
const countryIdRoute = require('./countryDetail')



const router = Router();

// Configurar los routers
router.use('/countries', countriesRoute);
router.use('/countries/:id', countryIdRoute);
router.use('/activity', activityRoute);


module.exports = router;
