const { Personnel } = require('../models');

const personnelData = [
  {
    job_title: 'Surgeon',
    name: 'Hilly Harty',
    phone_number: '555-867-5309',
  },
  {
    job_title: 'Rad Tech',
    name: 'Ron Ravolta',
    phone_number: '555-438-2368',
  },
  {
    job_title: 'Surgical Tech',
    name: 'Ashe Missem',
    phone_number: '555-555-5555',
  },
  {
    job_title: 'Turnover Team',
    name: 'Kratos Doe',
    phone_number: '555-666-7777',
  },
  {
    job_title: 'Surgeon',
    name: 'Leon Kennedy',
    phone_number: '555-123-4567',
  },
  {
    job_title: 'Rad Tech',
    name: 'Bort Simpson',
    phone_number: '555-098-7654',
  },
  {
    job_title: 'Surgical Tech',
    name: 'Toaster Stevenson',
    phone_number: '555-210-5123',
  },
  {
    job_title: 'Nurse',
    name: 'Turd Ferguson',
    phone_number: '555-547-2342',
  },
  {
    job_title: 'Nurse',
    name: 'Ada Wong',
    phone_number: '555-444-3333',
  },
  {
    job_title: 'Nurse',
    name: 'Sora Nomura',
    phone_number: '555-222-6666',
  },
];

const seedPersonnel = () => Personnel.bulkCreate(personnelData);

module.exports = seedPersonnel;
