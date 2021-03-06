const router = require('express').Router();
const {Patient} = require('../../models');

// The `/api/patients endpoint

// create new patient
router.post('/', async (req, res) => {
  // gender comes in req as string ('male', 'female', or 'other')

  try {
    const genderBool = [];
    if (req.body.gender === 'male') {
      genderBool.push(true);
    } else if (req.body.gender === 'female') {
      genderBool.push(false);
    } else {
      genderBool.push(null);
    }


    const newPatient = await Patient.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      date_of_birth: req.body.date_of_birth,
      gender: genderBool[0],
      drug_allergies: req.body.drug_allergies,
      insurance: req.body.insurance,
    });

    res.status(200).json(newPatient);
    console.log(newPatient);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update patient
router.put('/:id', async (req, res) => {
  try {
    const patient = await Patient.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        drug_allergies: req.body.drug_allergies,
        insurance: req.body.insurance,
        room_id: req.body.room_id,
      },
      {
        where: {
          id: req.params.id,
        },
      });
    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', (req, res) => {
  // delete one patient by its `id` value
  Patient.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPatientData => {
      if (!dbPatientData) {
        res.status(404).json({ message: 'No patient with this id found'});
        return;
      }
      res.json(dbPatientData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;