const { StaffLocation } = require('../models');

const staffLocData = [
  {
    room_id: 2,
    personnel_id: 5,
  },
  {
    room_id: 2,
    personnel_id: 9,
  },
  {
    room_id: 3,
    personnel_id: 4,
  },
  {
    room_id: 6,
    personnel_id: 7,
  },
  {
    room_id: 1,
    personnel_id: 6,
  },
  {
    room_id: 5,
    personnel_id: 10,
  },
];

const seedStaffLocation = () => StaffLocation.bulkCreate(staffLocData);

module.exports = seedStaffLocation;
