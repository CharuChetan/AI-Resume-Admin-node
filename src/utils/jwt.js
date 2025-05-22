module.exports = {
  generateToken: (user) => {
    const jwt = require("jsonwebtoken");
    const secretKey = process.env.CLERK_JWT_KEY || "your_secret_key_Atulya";
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
    return token;
  },

  verifyToken: (token) => {
    const jwt = require("jsonwebtoken");
    const secretKey = process.env.CLERK_JWT_KEY || "your_secret_key_Atulya";
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (error) {
      return null;
    }
  },
};
