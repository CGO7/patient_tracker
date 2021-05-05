const User = require('./User');
const Room = require('./Room');
const Service = require('./Service');
const Patient = require('./Patient');
const Personnel = require('./Personnel');
const TurnoverTeam = require('./TurnoverTeam');


Personnel.hasMany(Patient, {
  foreignKey: 'personnel_id',
//   onDelete: 'SET NULL', //not sure about this one
});

Patient.belongsTo(Personnel, {
  foreignKey: 'personnel_id'
});

Room.hasMany(Patient, {
  foreignKey: 'patient_id',
});

Patient.belongsTo(Room, {
  foreignKey: 'patient_id',
});

Room.hasMany(Personnel, {
  foreignKey: 'patient_id',
});

Personnel.belongsTo(Room, {
  foreignKey: 'patient_id',
});

Room.hasMany(TurnoverTeam, {
  foreignKey: 'patient_id',
});

// TurnoverTeam.belongsTo(Room, {
//   foreignKey: 'patient_id',
// });


module.exports = { User, Patient, Personnel, Room, Service, TurnoverTeam };