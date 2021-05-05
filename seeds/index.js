const sequelize = require('../config/connection');
const { Room, Personnel, Patient } = require('../models');

const room = require('./room_seeds.json');
const personnel = require('./personnel_seeds.json');
const patient = require('./patient_seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Room.bulkCreate(room, {
    individualHooks: true,
    returning: true,
  });
  await Personnel.bulkCreate(personnel, {
    individualHooks: true,
    returning: true,
  });
  await Patient.bulkCreate(patient, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
