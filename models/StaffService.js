const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our StaffService model
class StaffService extends Model {}

// create fields/columns for StaffService model
StaffService.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    service_id: {
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

module.exports = StaffService;