const { ServiceLocation } = require('../models');

const serviceLocData = [
  {
    room_id: 2,
    service_id: 1,
  },
  {
    room_id: 3,
    service_id: 2,
  },
  {
    room_id: 6,
    service_id: 3,
  },
  {
    room_id: 1,
    service_id: 4,
  },
  {
    room_id: 5,
    service_id: 5,
  },
];

const seedServiceLocation = () => ServiceLocation.bulkCreate(serviceLocData);

module.exports = seedServiceLocation;
