const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const UserQuery = sequelize.define(
  "user_queries",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    document_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
    published_at: {
      type: DataTypes.DATE(6),
      allowNull: true,
    },
    created_by_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    updated_by_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    locale: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = UserQuery;
