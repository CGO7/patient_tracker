const sequelize = require('../config/connection');
const seedRooms = require('./room_seeds');
const seedPersonnel = require('./personnel_seeds');
const seedPatients = require('./patient_seeds');
const seedService = require('./service_seeds');
const seedStaffService = require('./staffService_seeds');
const seedServiceLocation = require('./serviceLocation_seeds');
const seedPatientStaff = require('./patientStaff_seeds');
const seedUsers = require('./user_seeds');


const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedRooms();
    console.log('\n----- ROOM SEEDED -----\n');

    await seedService();
    console.log('\n----- SERVICE SEEDED -----\n');

    await seedStaffService();
    console.log('\n----- STAFFSERVICE SEEDED -----\n');

    await seedPersonnel();
    console.log('\n----- PERSONNEL SEEDED -----\n');

    await seedPatients();
    console.log('\n----- PATIENT SEEDED -----\n');

    await seedServiceLocation();
    console.log('\n----- SERVICELOCATION SEEDED -----\n');

    await seedPatientStaff();
    console.log('\n----- PATIENTSTAFF SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USER SEEDED -----\n');

  } catch (err) {
    console.log('ERROR: ' + err);
  }

  process.exit(0);
};

seedAll();
