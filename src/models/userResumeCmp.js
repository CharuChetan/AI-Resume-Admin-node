module.exports = (sequelize, DataTypes) => {
  const UserResumeCmp = sequelize.define(
    "UserResumeCmp",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
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

  return UserResumeCmp;
};
