import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";
import { User } from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["jwt-Assignment4"];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "UnAuthorized - token not found" });
    }

    let decode;
    try {
      decode = jwt.verify(token, ENV_VARS.JWT_SECRET);
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "UnAuthorized - Invalid token" });
    }

    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const users = await User.find().select("-password");
    req.user = user;
    req.users = users;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware " + error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
