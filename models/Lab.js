const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lab extends Model {}
// not entirely sure about this Model
Lab.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
    },
    patient_id: {
      references: 'patient',
      key: 'id',
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
    modelName: 'lab',
  }
);

module.exports = Lab;
