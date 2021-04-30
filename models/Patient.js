const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patient extends Model {}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(15),
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING(50),
    },
    state: {
      type: DataTypes.STRING(50),
    },
    zip_code: {
      type: DataTypes.STRING(10),
    },
    age: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    Drug_Allergies: {
      type: DataTypes.STRING,
    },
    Insurance: {
      type: DataTypes.STRING,
    },
    Surgery_Type: {
      type: DataTypes.STRING,
    },
    doctor_id: {
        references: 'doctor',
        key: 'id',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patient',
  }
);

module.exports = Patient;
