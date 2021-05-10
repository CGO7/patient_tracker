const { StaffService } = require('../models');

const staffServiceData = [
  {
    service_id: 1,
    personnel_id: 1,
  },
  {
    service_id: 1,
    personnel_id: 2,
  },
  {
    service_id: 1,
    personnel_id: 3,
  },
  {
    service_id: 1,
    personnel_id: 8,
  },
  {
    service_id: 2,
    personnel_id: 5,
  },
  {
    service_id: 2,
    personnel_id: 6,
  },
  {
    service_id: 2,
    personnel_id: 7,
  },
  {
    service_id: 2,
    personnel_id: 9,
  },
  {
    service_id: 3,
    personnel_id: 1,
  },
  {
    service_id: 3,
    personnel_id: 2,
  },
  {
    service_id: 3,
    personnel_id: 3,
  },
  {
    service_id: 3,
    personnel_id: 8,
  },
  {
    service_id: 4,
    personnel_id: 5,
  },
  {
    service_id: 4,
    personnel_id: 6,
  },
  {
    service_id: 4,
    personnel_id: 7,
  },
  {
    service_id: 4,
    personnel_id: 10,
  },
  {
    service_id: 5,
    personnel_id: 1,
  },
  {
    service_id: 5,
    personnel_id: 2,
  },
  {
    service_id: 5,
    personnel_id: 3,
  },
  {
    service_id: 5,
    personnel_id: 10,
  },
];

const seedStaffService = () => StaffService.bulkCreate(staffServiceData);

module.exports = seedStaffService;
