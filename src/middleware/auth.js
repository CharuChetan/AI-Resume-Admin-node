const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ message: "No token provided" });
  }

  const token = authHeader.replace("Bearer ", "");
  const secretKey = process.env.CLERK_JWT_KEY || "your_secret_key_Atulya";

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // or req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
