const { Room } = require('../models');

const roomData = [
  {
    room_number: '1001',
    type: 'single',
    status: 'ready',
  },
  {
    room_number: '1002',
    type: 'double',
    status: 'occupied',
  },
  {
    room_number: '1003',
    type: 'single',
    status: 'awaiting cleaning',
  },
  {
    room_number: '2001',
    type: 'double',
    status: 'ready',
  },
  {
    room_number: '2002',
    type: 'single',
    status: 'ready',
  },
  {
    room_number: '2003',
    type: 'single',
    status: 'awaiting cleaning',
  },
];

const seedRooms = () => Room.bulkCreate(roomData);

module.exports = seedRooms;