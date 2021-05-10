const User = require('./User');
const Room = require('./Room');
const Service = require('./Service');
const Patient = require('./Patient');
const Personnel = require('./Personnel');
const PatientStaff = require('./PatientStaff');
const ServiceLocation = require('./ServiceLocation');
const StaffService = require('./StaffService');

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

Room.belongsToMany(Service, {
  through: {
    model: ServiceLocation,
    unique: false,
  },
  as: 'room_service'
});

Service.belongsToMany(Room, {
  through: {
    model: ServiceLocation,
    unique: false,
  },
  as: 'room_service'
});

Service.belongsToMany(Personnel, {
  through: {
    model: StaffService,
    unique: false,
  },
  as: 'service_staff'
});

Personnel.belongsToMany(Service, {
  through: {
    model: StaffService,
    unique: false,
  },
  as: 'service_staff'
});

Patient.hasMany(Service, {
  foreignKey: 'patient_id',
});

Service.belongsTo(Patient);

module.exports = { User, Patient, Room, Service, Personnel, PatientStaff, ServiceLocation, StaffService };
