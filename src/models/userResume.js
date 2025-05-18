const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const UserResume = sequelize.define(
  "user_resumes",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    documentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resume_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_name: {
      type: DataTypes.STRING,
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
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summery: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    themeColor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = UserResume;
