const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const UserResumeCmp = sequelize.define(
  "user_resumes_cmps",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    cmp_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    component_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    field: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order: {
      type: DataTypes.DOUBLE.UNSIGNED,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = UserResumeCmp;
