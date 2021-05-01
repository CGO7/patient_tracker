const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TurnoverTeam extends Model {}

TurnoverTeam.init(
  {
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    room_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_status: {
      type: DataTypes.BOOLEAN,  // occupied or not?
      allowNull: false,
    },
    // might need patient_id as fk in here?
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'TurnoverTeam',
  }
);

module.exports = TurnoverTeam;
