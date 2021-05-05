const seedRoom = require('./room_seeds');
const seedPersonnel = require('./personnel_seeds');
const seedPatient = require('./patient_seeds');

const sequelize = require('../config/connection');
const { Patient, Personnel, Room } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
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