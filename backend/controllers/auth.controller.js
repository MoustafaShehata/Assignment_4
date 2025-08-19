import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

// signup
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    const existingUserByUsername = await User.findOne({ username: username });
    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exist" });
    }

    const existingUserByEmail = await User.findOne({ email: email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exist" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedpassword,
    });

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    const users = await User.find().select("-password");

    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
      },
      users: [...users],
      message: "User created successfully",
    });
  } catch (error) {
    console.log("Error in signup controller " + error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const users = await User.find().select("-password");

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: "",
      },
      users: [...users],
      message: "Logged in successfully",
    });
  } catch (error) {
    console.log("Error in login controller " + error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// logout
export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt-Assignment4");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller " + error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
