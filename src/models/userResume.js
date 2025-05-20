const { Sequelize, NOW } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const UserResume = sequelize.define(
    "UserResume",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      resumeId: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      jobTitle: {
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
      isExperince: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isEducation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isSkill: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      themeColor: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "#3357FF",
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return UserResume;
};
