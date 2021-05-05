const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Room extends Model {}

Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    room_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,5],
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,// occupied or not?
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'room',
  }
);

module.exports = Room;
