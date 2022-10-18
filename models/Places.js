// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Places model (table) by extending off Sequelize's Model class
class Place extends Model { }

// set up fields and rules for Places model
Place.init(
  {
    // define columns
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
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city:{
      type: DataTypes.STRING,
      allowNull:false,
    
    },
    state:{
      type: DataTypes.STRING,
      allowNull:false,
    
    },
    zip:{
      type: DataTypes.INTEGER,
      allowNull: false,    
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'places',
  }
);

module.exports = Place;