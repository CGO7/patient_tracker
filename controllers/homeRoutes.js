const router = require('express').Router();
const { Patient, User, PatientStaff, Personnel, Room } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // console.log(req.body);
    // const patientData = await Patient.findAll();

    // // // Serialize data so the template can read it
    // const patients = patientData.map((patient) => patient.get({ plain: true }));

    // // // Pass serialized data and session flag into template
    if (req.session.logged_in) {
      res.render('search', {
        logged_in: req.session.logged_in
      });
    } else {
      res.render('homepage', 
      // patients
      );
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/patients', withAuth, async (req, res) => {
  try {
    const patientData = await Patient.findAll({
      attributes: { include: ['first_name', 'last_name', 'dateOfBirth'] },
    });

    const patients = patientData.map((patient) => patient.get({ plain: true }));

    res.render('patient-list', {
      patients,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/patient/:id', withAuth, async (req, res) => {
  try {
    const patientData = await Patient.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: Personnel,
      //     through: PatientStaff,
      //   },
      //   { model: Room }
      // ],
    });

    const patient = patientData.get({ plain: true });

    res.render('patient', {
      patient,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/personnel', withAuth, async (req, res) => {
  try {
    const personnelData = await Personnel.findAll();

    const personnel = personnelData.map((person) => person.get({ plain: true }));

    res.render('personnel-list', {
      personnel,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/search');
    return;
  }

  res.render('login');
});

router.get('/search', (req, res) => {
    res.render('search');
});

// Added rooms route(s)
router.get('/rooms', withAuth, async (req, res) => {
  try {
    const roomData = await Room.findAll({
      attributes: { include: ['room_number', 'type', 'status'] },
    });

    const rooms = roomData.map((rooms) => rooms.get({ plain: true }));

    res.render('rooms-list', {
      patients,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/rooms/:id', withAuth, async (req, res) => {
  try {
    const roomData = await Rooms.findByPk(req.params.id, {
      // include:
    });

    const rooms = roomData.get({ plain: true });

    res.render('rooms', {
      patient,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
