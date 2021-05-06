const sequelize = require('../config/connection');
const seedRooms = require('./room_seeds');
const seedPersonnel = require('./personnel_seeds');
const seedPatients = require('./patient_seeds');
const seedStaffLocation = require('./staffLocation_seeds');
const seedPatientStaff = require('./patientStaff_seeds');
// const seedServices = require('./service_seeds');
const seedUsers = require('./user_seeds');


const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedRooms();
    console.log('\n----- ROOM SEEDED -----\n');

    // await seedServices();
    // console.log('\n----- SERVICE SEEDED -----\n');

    await seedPersonnel();
    console.log('\n----- PERSONNEL SEEDED -----\n');

    await seedPatients();
    console.log('\n----- PATIENT SEEDED -----\n');

    await seedStaffLocation();
    console.log('\n----- STAFFLOCATION SEEDED -----\n');

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
