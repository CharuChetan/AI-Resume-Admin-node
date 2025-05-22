const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes").default;
const mysql = require("mysql2/promise");
const cors = require("cors");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"], // Allowed origins
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
  credentials: true, // Allow cookies and authorization headers
  allowedHeaders: "Content-Type,Authorization",
};

// Use the cors middleware with options
app.use(cors(corsOptions));

mysql
  .createConnection({
    host: process.env.ADMIN_DATABASE_HOST,
    user: process.env.ADMIN_DATABASE_USER,
    password: process.env.ADMIN_DATABASE_PASSWORD,
    database: process.env.ADMIN_DATABASE_NAME,
  })
  .then((res) => console.log("Database connection success"))
  .catch((err) => {
    if (err) {
      console.error("Database connection failed:", err.stack);
      return;
    }
    console.log("Connected to the database.");
  });

db.sequelize
  .sync({ alter: true }) // or{ alter: true }// { force: true } to recreate tables every run
  .then(() => {
    console.log("✅ Database synced successfully");
    // Your app logic starts here
  })
  .catch((err) => {
    console.error("❌ Sync failed:", err);
  });

app.use(bodyParser.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
