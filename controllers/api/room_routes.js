const router = require('express').Router();
const { Room, Patient, Personnel, Service } = require('../../models');

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
        model: Service,
        attributes: ['id', 'surgery_type', 'estimated_hours']
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
        model: Service,
        attributes: ['id', 'surgery_type', 'estimated_hours']
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
    room_number: req.body.room_number,
    type: req.body.type,
    status: req.body.status
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