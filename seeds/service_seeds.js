const { Service } = require('../models');

const serviceData = [
  {
    surgery_type: "Tonsillectomy",
    estimated_hours: 2,
  },
  {
    surgery_type: "Hernia Repair",
    estimated_hours: 3,
  },
  {
    surgery_type: "Gallbladder Removal",
    estimated_hours: 1,
  },
  {
    surgery_type: "Cataract",
    estimated_hours: 1,
  },
  {
    surgery_type: "Biopsy",
    estimated_hours: 1,
  },
];

const seedService = () => Service.bulkCreate(serviceData);

module.exports = seedService;