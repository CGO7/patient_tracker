const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our PatientStaff model
class PatientStaff extends Model {}

// create fields/columns for PatientStaff model
PatientStaff.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'patient',
        key: 'id',
        // unique: false
      }
    },
    personnel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'personnel',
        key: 'id',
        // unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patientstaff'
  }
);

module.exports = PatientStaff;
