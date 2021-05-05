const { PatientStaff } = require('../models');

const patientStaffData = [
  {
    patient_id: 5,
    personnel_id: 1,
  },
  {
    patient_id: 5,
    personnel_id: 8,
  },
  {
    patient_id: 2,
    personnel_id: 6,
  },
  {
    patient_id: 6,
    personnel_id: 2,
  },
  {
    patient_id: 4,
    personnel_id: 5,
  },
  {
    patient_id: 4,
    personnel_id: 9,
  },
];

const seedPatientStaff = () => PatientStaff.bulkCreate(patientStaffData);

module.exports = seedPatientStaff;
