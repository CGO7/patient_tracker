const router = require('express').Router();
const {Patient, Room, Personnel, Service,} = require('../../models');

// The `/api/patients endpoint

// get all patients
router.get('/', (req, res) => {
  // find all patients
  // be sure to include its associated room, Personnel, service, and lab data
  Patient.findAll({
    include: [
      {
        model: Room,
        attributes: ['id', 'room_number', 'room_type', 'room_status',]
      },
      {
        model: Personnel,
        attributes: ['id', 'job_title', 'name', 'phone_number', 'surgery_id']
      },
      {
        model: Service,
        attributes: ['id','surgery_type', 'estimated_hours']
      },
      // {
      //   model: TurnoverTeam,
      //   attributes: ['room_id', 'room_number', 'room_type', 'room_status']
      // },

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
        attributes: ['id', 'room_number', 'room_type', 'room_status']
      },
      {
        model: Personnel,
        attributes: ['id', 'job_title', 'name', 'phone_number', 'surgery_id']
      },
      {
        model: Service,
        attributes: ['id','surgery_type', 'estimated_']
      },
      // {
      //   model: TurnoverTeam,
      //   attributes: ['room_id', 'room_number', 'room_type', 'room_status']
      // }
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
    PersonnelIds: req.body.Personnel_id,// dropdown??
    roomIds: req.body.room_id,
    serviceId: req.body.service_id,
    //referece data
    //form input map into body props
  })
    .then((patient) => {
      // if there's patient Personnels, we need to create pairings to bulk create in the PatientPersonnel model
      if (req.body.PersonnelIds.length) {
        const patientPersonnelIdArr = req.body.PersonnelIds.map((Personnel_id) => {
          return {
            patient_id: patient.id,
            Personnel_id,
          };//switch case chain maybe for all Ids
        });
        return PatientPersonnel.bulkCreate(patientPersonnelIdArr);
      }
      // if no patient tags, just respond
      res.status(200).json(patient);
    })
    .then((patientPersonnelIds) => res.status(200).json(patientPersonnelIds))
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
    .then(() => {
      // find all associated Personnels from PatientPersonnel
      return PatientPersonnel.findAll({ where: { patient_id: req.params.id } });
    })
    .then((patientPersonnels) => {
      // get list of current Personnel_ids
      const patientPersonnelIds = patientPersonnels.map(({ Personnel_id }) => Personnel_id);
      // create filtered list of new tag_ids
      const newPatientPersonnels = req.body.PersonnelIds
        .filter((Personnel_id) => !patientPersonnelIds.includes(Personnel_id))
        .map((Personnel_id) => {
          return {
            patient_id: req.params.id,
            Personnel_id,
          };
        });
      // figure out which ones to remove
      const patientPersonnelsToRemove = patientPersonnels
        .filter(({ Personnel_id }) => !req.body.PersonnelIds.includes(Personnel_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        PatientPersonnel.destroy({ where: { id: patientPersonnelsToRemove } }),
        PatientPersonnel.bulkCreate(newPatientPersonnels),
      ]);
    })
    .then((updatedPatientPersonnels) => res.json(updatedPatientPersonnels))
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