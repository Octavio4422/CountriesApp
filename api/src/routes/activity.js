const { Router } = require('express');
const { TouristActivity } = require("../db");
const router = Router();

router.post('/', (req,res,next) => {
    res.send('soy post de activity')
})

module.exports = router;