// models/index.js
const fs = require("fs");
const path = require("path");
const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const db = {};

// Load each model file and call it like a function
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file !== "index.js" && file !== "relations.js" && file.endsWith(".js")
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, file));
    const model = modelDefiner(sequelize, DataTypes);
    db[model.name] = model;
  });

// Setup associations
require("./relations")(db);

db.sequelize = sequelize;
db.Sequelize = require("sequelize");

module.exports = db;
