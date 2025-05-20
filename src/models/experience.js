module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define(
    "Experience",
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
      companyName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      endDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      workSummery: {
        type: DataTypes.TEXT("long"),
        allowNull: true,
      },
      currentlyWorking: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      userResumeId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "UserResume",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Experience;
};
