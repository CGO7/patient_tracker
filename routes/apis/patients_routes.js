const router = require('express').Router();
const { Room, Surgeon, Service, Nurse, RadTech, SurgicalTech, TurnoverTeam  } = require('../../models');

// The `/api/patients endpoint

// get all patients
router.get('/', (req, res) => {
  // find all patients
  // be sure to include its associated room, doctor, service, and lab data
  Patient.findAll({
    include: [
      {
        model: Room,
        attributes: ['id', 'type']
      },
      {
        model: Surgeon,
        attributes: ['id', 'name']
      },
      {
        model: Service,
        attributes: ['id','description', 'estimated_time']   
      },
      {
        model: Nurse,
        attributes: ['id', 'blood', 'urine']
      },
      { 
        model: RadTech,
        attributes: ['', '']
      },
      {
        model: SurgicalTech,
        attributes: ['','']
      },
      {
        model: TurnoverTeam,
        attributes: ['', '']
      },

    ]
  })
    .then(dbPatientData => res.json(dbPatientData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one patientt
router.get('/:id', (req, res) => {
  // find a single patient by its `id`
  // be sure to include its associated Category and Tag data
  Patient.findOne({
    where: {
      id: req.params.id
    },
    include: [
       {
        model: Room,
        attributes: ['id', 'type']
      },
      {
        model: Doctor,
        attributes: ['id', 'tag_name']
      },
      {
        model: Service,
        attributes: ['id','description', 'estimated_time']   
      },
      {
        model: Lab,
        attributes: ['id', 'blood', 'urine']
      }
    ]
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

// create new patientt
router.post('/', (req, res) => {
  Patient.create({
    patient_first_name: req.body.patient_first_name,
    patient_last_name: req.body.patient_last_name,
    phone: req.body.phone,
    address: req.body.address,
    age: req.body.age,
    gender: req.body.gender,
    doctorIds: req.body.doctor_id,// dropdown??
    //roomIds: req.body.room_id,
    //serviceId: req.body.service_id,
    //labId: req.body.lab_id
    //referece data
    //form input map into body props
  })
    .then((patient) => {
      // if there's patient doctors, we need to create pairings to bulk create in the PatientDoctor model
      if (req.body.doctorIds.length) {
        const patientDoctorIdArr = req.body.doctorIds.map((doctor_id) => {
          return {
            patient_id: patient.id,
            doctor_id,
          };//switch case chain maybe for all Ids
        });
        return PatientDoctor.bulkCreate(patientDoctorIdArr);
      }
      // if no patient tags, just respond
      res.status(200).json(patient);
    })
    .then((patientDoctorIds) => res.status(200).json(patientDoctorIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update patient
router.put('/:id', (req, res) => {
  // update patient data
  Patient.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((patient) => {
      // find all associated doctors from PatientDoctor
      return PatientDoctor.findAll({ where: { patient_id: req.params.id } });
    })
    .then((patientDoctors) => {
      // get list of current doctor_ids
      const patientDoctorIds = patientDoctors.map(({ doctor_id }) => doctor_id);
      // create filtered list of new tag_ids
      const newPatientDoctors = req.body.doctorIds
        .filter((doctor_id) => !patientDoctorIds.includes(doctor_id))
        .map((doctor_id) => {
          return {
            patient_id: req.params.id,
            doctor_id,
          };
        });
      // figure out which ones to remove
      const patientDoctorsToRemove = patientDoctors
        .filter(({ doctor_id }) => !req.body.doctorIds.includes(doctor_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        PatientDoctor.destroy({ where: { id: patientDoctorsToRemove } }),
        PatientDoctor.bulkCreate(newPatientDoctors),
      ]);
    })
    .then((updatedPatientDoctors) => res.json(updatedPatientDoctors))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
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