module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define(
    "Education",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      universityName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      degree: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      major: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      end_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT("long"),
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

  return Education;
};
