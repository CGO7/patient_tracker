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

Room.hasMany(Patient, {
    foreignKey: 'patient_id',
});

Patient.belongsTo(Room, {
    foreignKey: 'patient_id',
});

Room.hasMany(Nurse, {
    foreignKey: 'patient_id',
});

Nurse.belongsTo(Room, {
    foreignKey: 'patient_id',
});

Room.hasMany(SurgicalTech, {
    foreignKey: 'patient_id',
});

SurgicalTech.belongsTo(Room, {
    foreignKey: 'patient_id',
});

Room.hasMany(RadTech, {
    foreignKey: 'patient_id',
});

RadTech.belongsTo(Room, {
    foreignKey: 'patient_id',
});

Room.hasMany(TurnoverTeam, {
    foreignKey: 'patient_id',
});

TurnoverTeam.belongsTo(Room, {
    foreignKey: 'patient_id',
});


module.exports = { User, Patient, Surgeon, Room, Service, Nurse, SurgicalTech, RadTech, TurnoverTeam };