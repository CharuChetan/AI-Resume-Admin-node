const sequelize = require("../config/db").sequelize;
const { Types } = require("mysql");

const User = sequelize.define("users", {
  id: {
    type: Types.INT24,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Types.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Types.STRING,
    allowNull: false,
  },
  email: {
    type: Types.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: {
    type: Types.DATE,
    defaultValue: Types.NOW,
  },
  updatedAt: {
    type: Types.DATE,
    defaultValue: Types.NOW,
  },
});

module.exports = User;
