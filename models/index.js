const User = require('./User');
const Surgeon = require('./Surgeon');
const Room = require('./Room');
const Service = require('./Service');
const Patient = require('./Patient');
const Nurse = require('./Nurse');
const SurgicalTech = require('./SurgicalTech');
const RadTech = require('./RadTech');
const TurnoverTeam = require('./TurnoverTeam');


Surgeon.hasMany(Patient, {
  foreignKey: 'doctor_id',
//   onDelete: 'SET NULL', //not sure about this one
});

Patient.belongsTo(Surgeon, {
  foreignKey: 'surgeon_id'
});

Lab.hasMany(Patient, {
    foreignKey: 'patient_id',
    // onDelete: 'CASCADE'  // not sure
});


Room.hasMany(Patient, {
    foreignKey: 'patient_id',
});

Patient.belongsTo(Room, {
    foreignKey: 'patient_id',
});

module.exports = { User, Patient, Surgeon, Room, Service, Nurse, SurgicalTech, RadTech, TurnoverTeam };