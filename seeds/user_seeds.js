const { User } = require('../models');

const userData = [
  {
    username: 'takolad',
    password: '$2b$10$I5CwkqxaHJxpT033m2/O3eJMRjSI6SjTkxs3gkkvVgtRbc.b7cA3e',
    name: 'Tako Lad',
  },
  {
    username: 'chris777',
    password: '$2b$10$sGV.3kTLAvVAdo984x.wG.AvVxbdBbnMbH3GferdNivRdF23szw02',
    name: 'Chris',
  },
  {
    username: 'leticia_m',
    password: '$2b$10$Ol8jmlpgKBzfUGAWBB4OH..DSToUTIS3CX7NLtbw5vUYA8cTGPHTu',
    name: 'Leticia',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
