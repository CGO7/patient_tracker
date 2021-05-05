const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Personnel extends Model {}

Personnel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job_title: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['Surgeon', 'Rad Tech', 'Surgical Tech', 'Nurse'],
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
      type: DataTypes.INTEGER,
    },
    room_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rooms',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'personnel',
  }
);

module.exports = Personnel;