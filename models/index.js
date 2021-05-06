const User = require('./User');
const Room = require('./Room');
const Service = require('./Service');
const Patient = require('./Patient');
const Personnel = require('./Personnel');
const PatientStaff = require('./PatientStaff');
const StaffLocation = require('./StaffLocation');

Personnel.belongsToMany(Patient, {
  through: {
    model: PatientStaff,
    unique: false,
  },
  as: 'medical_staff'
});

Patient.belongsToMany(Personnel, {
  through: {
    model: PatientStaff,
    unique: false,
  },
  as: 'medical_staff'
});

Room.hasMany(Patient, {
  foreignKey: 'room_id',
});

Patient.belongsTo(Room);

Room.belongsToMany(Personnel, {
  through: {
    model: StaffLocation,
    unique: false,
  },
  as: 'room_staff'
});

Personnel.belongsToMany(Room, {
  through: {
    model: StaffLocation,
    unique: false,
  },
  as: 'room_staff'
});

Patient.hasMany(Service, {
  foreignKey: 'patient_id',
});

Service.belongsTo(Patient);

module.exports = { User, Patient, Room, Service, Personnel, PatientStaff, StaffLocation };
