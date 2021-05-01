const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Nurse extends Model {}

Nurse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    surgery_id: {
      references: 'service',
      key: 'id',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'nurse',
  }
);

module.exports = Nurse;
 