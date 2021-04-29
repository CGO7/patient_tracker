const router = require('express').Router();
const doctor_routes = require('./doctor_routes.js');
const patient_routes = require('./patient-routes.js');
const room_routes = require('./room_routes.js');



router.use('/hospital_wing_routes', doctor_routes);
router.use('/patient', patient_routes);
router.use('/room', room_routes);

module.exports = router;