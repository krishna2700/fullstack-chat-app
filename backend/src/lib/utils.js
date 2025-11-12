import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export const generateToken = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // accessible only by web server
    secure: process.env.NODE_ENV !== "development", // https only in production
    sameSite: "strict", // CSRF protection
  });
  return token;
};
