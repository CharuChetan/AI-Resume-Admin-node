const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.ADMIN_DATABASE_NAME,
  process.env.ADMIN_DATABASE_USER,
  process.env.ADMIN_DATABASE_PASSWORD,
  {
    host: process.env.ADMIN_DATABASE_HOST,
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully."); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
  });

module.exports = sequelize;
