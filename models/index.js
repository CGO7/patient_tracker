const User = require('./User');
const Doctor = require('./Doctor');
const Lab = require('./Lab');
const Room = require('./Room');
const Service = require('./Service');
const Patient = require('./Patient');

Doctor.hasMany(Patient, {
  foreignKey: 'doctor_id',
//   onDelete: 'SET NULL', //not sure about this one
});

Patient.belongsTo(Doctor, {
  foreignKey: 'doctor_id'
});

Lab.hasMany(Patient, {
    foreignKey: 'patient_id',
    // onDelete: 'CASCADE'  // not sure
});

Patient.belongsTo(Lab, {
    foreignKey: 'patient_id',
});

Lab.hasMany(Doctor, {
    foreignKey: 'doctor_id',
    // onDelete: 'SET NULL',
});

Doctor.belongsTo(Lab, {
    foreignKey: 'doctor_id',
});

Room.hasMany(Patient, {
    foreignKey: 'patient_id',
});

Patient.belongsTo(Room, {
    foreignKey: 'patient_id',
});

module.exports = { User, Patient, Doctor, Lab, Room, Service };