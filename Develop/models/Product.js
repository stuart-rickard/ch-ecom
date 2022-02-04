// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      // NEEDS WORK
      type: DataTypes.DECIMAL(2), //CHECK
      allowNull: false,
      validate: {
        isDecimal: true, //CHECK
      },
    },
    stock: {
      // NEEDS WORK
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10, //CHECK
      validate: {
        isNumber: true, //CHECK doesn't it have to be a number due to datatype?  we could check that it's a positive number.
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
