const router = require('express').Router();
const { Personnel } = require('../../models');

// The `/api/Personnels` endpoint

// Add Personnel
router.post('/', async (req, res) => {
  try {
    const personnelData = await Personnel.create(req.body);
    res.status(200).json(personnelData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a Personnel member by their `id` value
router.put('/:id', (req, res) => {
  Personnel.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(updatedPersonnel => {
      if (!updatedPersonnel[0]) {
        res.status(404).json({ message: 'No personnel member with this id found'});
        return;
      }
      res.json(updatedPersonnel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete personnel by their `id` value
router.delete('/:id', (req, res) => {
  Personnel.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(deletedPersonnel => {
      if (!deletedPersonnel) {
        res.status(404).json({ message: 'No personnel member with this id found'});
        return;
      }
      res.json(deletedPersonnel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;