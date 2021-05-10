const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our ServiceLocation model
class ServiceLocation extends Model {}

// create fields/columns for ServiceLocation model
ServiceLocation.init(
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
    service_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'service',
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
    modelName: 'servicelocation'
  }
);

module.exports = ServiceLocation;