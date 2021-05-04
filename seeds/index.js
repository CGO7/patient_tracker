const seedRoom = require('./category-seeds');
const seedPersonnel = require('./personnel-seeds');
const seedPatient = require('./patient-seeds');
const seedRoom = require('./room-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedRoom();
  console.log('\n----- ROOM SEEDED -----\n');

  await seedPersonnel();
  console.log('\n----- PERSONNEL SEEDED -----\n');

  await seedPatient();
  console.log('\n----- PATIENT SEEDED -----\n');

  process.exit(0);
};

seedAll();