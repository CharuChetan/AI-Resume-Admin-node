module.exports = (sequelize, Types) => {
  const User = sequelize.define("User", {
    id: {
      type: Types.INTEGER.UNSIGNED,
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

  return User;
};
