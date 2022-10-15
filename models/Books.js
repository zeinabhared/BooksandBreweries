// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Books model (table) by extending off Sequelize's Model class
class BOOK extends Model { }

// set up fields and rules for Books model
BOOK.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    infotext:{
      type: DataTypes.STRING,
      allowNull:false,
    
    },
    rating:{
      type: DataTypes.DECIMAL,
      allowNull:false,
      default:5,
      validate:{
        isNumeric:true,
      },
    },
    // category_id:{
    //   type: DataType.INTEGER,
    //   references:{
    //     model:'category',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'books',
  }
);

module.exports = BOOK;