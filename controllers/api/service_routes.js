const router = require('express').Router();
const { Service } = require('../../models');

router.post('/', async (req, res) => {
  // create a new Service
  try {
    const serviceData = await Service.create(req.body);
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a service by its `id` value
  try {
    const serviceData = await Service.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!serviceData[0]) {
      res.status(404).json({ message: 'No service with this id!' });
      return;
    }
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a service by its `id` value
  try {
    const serviceData = await Service.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!serviceData) {
      res.status(404).json({ message: 'No service with this id!' });
      return;
    }
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;