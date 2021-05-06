const router = require('express').Router();
const personnel_routes = require('./personnel_routes.js');
const patient_routes = require('./patient_routes.js');
const room_routes = require('./room_routes.js');
const user_routes = require('./user_routes.js');

router.use('/personnel', personnel_routes);
router.use('/patients', patient_routes);
router.use('/rooms', room_routes);
router.use('/users', user_routes);

module.exports = router;