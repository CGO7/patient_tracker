const router = require('express').Router();
const { Personnel, Patient} = require('../../models');

// The `/api/Personnels` endpoint

router.get('/', (req, res) => {
  // find all personnel
  // be sure to include its associated Patients
  Personnel.findAll({
    include: [
      {
        model: Patient,
        attributes: ['id', 'first_name', 'last_name', 'DOB']
      }
      // {
      //   model: Room,
      //   attributes: ['id', 'number', 'type', 'status']
      // }
    ]
  })
    .then(dbPersonnelData => res.json(dbPersonnelData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.get('/:id', (req, res) => {
  // find one Personnel by its `id` value
  // be sure to include its associated Patients
  // 13.2 object relational mapping day 2 bookroutes
  Personnels.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Patient,
        attributes: ['id', 'first_name', 'last_name']
      }
      // {
      //   model: Room,
      //   attributes: ['id', 'number', 'type', 'status']
      // }
    ]
  })
    .then(dbPersonnelData => {
      if (!dbPersonnelData) {
        res.status(404).json({ message: 'No Personnel with this id found'});
        return;
      }
      res.json(dbPersonnelData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new Personnel
  Personnel.create({
    Personnel_name: req.body.Personnel_name,
    Personnel_phone: req.body.Personnel_phone,
    Personnel_surgery_id: req.body.Personnel_surgery_id,
    Personnel_job_title: req.body.Personnel_job_title
  })
    .then(dbPersonnelData => res.json(dbPersonnelData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a Personnel by its `id` value
  Personnel.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPersonnelData => {
      if (!dbPersonnelData[0]) {
        res.status(404).json({ message: 'No category with this id found'});
        return;
      }
      res.json(dbPersonnelData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Personnel.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPersonnelData => {
      if (!dbPersonnelData) {
        res.status(404).json({ message: 'No Personnel with this id found'});
        return;
      }
      res.json(dbPersonnelData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;