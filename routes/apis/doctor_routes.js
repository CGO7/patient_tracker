const router = require('express').Router();
const { Doctor, Patient } = require('../../models');

// The `/api/doctors` endpoint

router.get('/', (req, res) => {
  // find all docs
  // be sure to include its associated Patients
  Doctor.findAll({
    include: [
      {
        model: Patient,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbDoctorData => res.json(dbDoctorData))
    .catch(err => { 
      console.log(err);
      res.status(500).json(err);
    });
  
});

router.get('/:id', (req, res) => {
  // find one doctor by its `id` value
  // be sure to include its associated Patients
  // 13.2 object relational mapping day 2 bookroutes
  Doctors.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Patient,
        attributes: ['id', 'first_name', 'last_name']
      }
    ]
  })
    .then(dbDoctorData => {
      if (!dbDoctorData) {
        res.status(404).json({ message: 'No doctor with this id found'}); 
        return; 
      }
      res.json(dbDoctorData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new doctor
  Doctor.create({
    doctor_name: req.body.doctor_name,
    doctor_phone: req.body.doctor_phone
  })
    .then(dbDoctorData => res.json(dbDoctorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a doctor by its `id` value
  Doctor.update(req.body, {
    where: {
        id: req.params.id
    }
  })
    .then(dbDoctorData => {
        if (!dbDoctorData[0]) {
            res.status(404).json({ message: 'No category with this id found'});
            return;
        }
        res.json(dbDoctorData);
  })
    .catch(err => {
        console.log(err); 
        res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Doctor.destroy({
    where: {
        id: req.params.id
    }
  })
    .then(dbDoctorData => {
        if (!dbDoctorData) {
            res.status(404).json({ message: 'No doctor with this id found'});
            return;
        }
        res.json(dbDoctorData);
  })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
  });
});

module.exports = router;