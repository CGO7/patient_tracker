const router = require('express').Router();
const { Room, Patient, Personnel } = require('../../models');

// The `/api/Rooms` endpoint

router.get('/', (req, res) => {
  // find all Room
  // be sure to include its associated Patients
  Room.findAll({
    include: [
      {
        model: Patient,
        attributes: ['id', 'first_name', 'last_name']
      },
      {
        model: Personnel,
        attributes: ['id', 'job_title', 'name', 'phone_number', 'surgery_id']
      }
    ]
  })
    .then(dbRoomData => res.json(dbRoomData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.get('/:id', (req, res) => {
  // find one Room by its `id` value
  // be sure to include its associated Patients
  // 13.2 object relational mapping day 2 bookroutes
  Rooms.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Patient,
        attributes: ['id', 'first_name', 'last_name']
      },
      {
        model: Personnel,
        attributes: ['id', 'job_title', 'name', 'phone_number', 'surgery_id']
      }
    ]
  })
    .then(dbRoomData => {
      if (!dbRoomData) {
        res.status(404).json({ message: 'No Room with this id found'});
        return;
      }
      res.json(dbRoomData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new Room
  Room.create({
    Room_id: req.body.Room_id,
    Room_number: req.body.Room_number,
    Room_type: req.body.Room_type,
    Room_status: req.body.Room_status
  })
    .then(dbRoomData => res.json(dbRoomData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a Room by its `id` value
  Room.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbRoomData => {
      if (!dbRoomData[0]) {
        res.status(404).json({ message: 'No room with this id found'});
        return;
      }
      res.json(dbRoomData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Room.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRoomData => {
      if (!dbRoomData) {
        res.status(404).json({ message: 'No Room with this id found'});
        return;
      }
      res.json(dbRoomData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;