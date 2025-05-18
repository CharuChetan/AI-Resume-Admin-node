const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes").default;
const mysql = require("mysql2/promise");
const cors = require("cors");

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
    host: "localhost",
    user: "root",
    password: "Alliswell@1234",
    database: "ai_builder_admin",
  })
  .then((res) => console.log("Database connection success"))
  .catch((err) => {
    if (err) {
      console.error("Database connection failed:", err.stack);
      return;
    }
    console.log("Connected to the database.");
  });

app.use(bodyParser.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
