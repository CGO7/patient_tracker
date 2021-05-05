const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our StaffLocation model
class StaffLocation extends Model {}

// create fields/columns for StaffLocation model
StaffLocation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    room_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'room',
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
    modelName: 'stafflocation'
  }
);

module.exports = StaffLocation;