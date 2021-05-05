const room = require('./room_seeds');
const personnel = require('./personnel_seeds');
const patient = require('./patient_seeds');

const sequelize = require('../config/connection');
const { Patient, Personnel, Room } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Patient.bulkCreate(patient, {
    individualHooks: true,
    returning: true,
  });
  await Posts.bulkCreate(posts, {
    individualHooks: true,
    returning: true,
  });
  await Comments.bulkCreate(comments, {
    individualHooks: true,
    returning: true,
  });

  console.log('\n----- DATABASE SYNCED -----\n');

  process.exit(0);
};

seedAll();