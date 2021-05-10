const { Service } = require('../models');

const serviceData = [
  {
    service_type: "Tonsillectomy",
    estimated_hours: 2,
  },
  {
    service_type: "Hernia Repair",
    estimated_hours: 3,
  },
  {
    service_type: "Gallbladder Removal",
    estimated_hours: 1,
  },
  {
    service_type: "Cataract",
    estimated_hours: 1,
  },
  {
    service_type: "Biopsy",
    estimated_hours: 1,
  },
];

const seedService = () => Service.bulkCreate(serviceData);

module.exports = seedService;