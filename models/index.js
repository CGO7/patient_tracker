const User = require('./User');
const Room = require('./Room');
const Service = require('./Service');
const Patient = require('./Patient');
const Personnel = require('./Personnel');
const TurnoverTeam = require('./TurnoverTeam');

Patient.belongsTo(Personnel, {
  foreignKey: 'personnel_id'
});

Personnel.belongsTo(Room, {
  foreignKey: 'room_id',
});

Room.hasMany(Personnel, {
  foreignKey: 'room_id',
});

Personnel.hasMany(Patient, {
  foreignKey: 'personnel_id',
//   onDelete: 'SET NULL', //not sure about this one
});


// Room.hasMany(TurnoverTeam, {
//   foreignKey: 'patient_id',
// // });

// TurnoverTeam.belongsTo(Room, {
//   foreignKey: 'patient_id',
// });


module.exports = { User, Patient, Personnel, Room, Service, TurnoverTeam };