import User from "./../models/User.js";
import bcrypt from "bcryptjs";

const createAdmin = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //request body validation
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    //search for existing user
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    //creation of admin
    const hashed = await bcrypt.hash(password, 10);
    const admin = await User.create({
      name,
      email,
      password: hashed,
      role: "admin",
    });

    res.status(201).json({
      message: "Admin user created successfully",
      admin: {
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }

    //check if a user with this email already exists
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: "User Already exists" });
    }

    //user creation
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPass,
      role: "user",
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const modifyUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    //validate input
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email is required to identify the user" });
    }

    // Find the user
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if data is actually changing
    const isSameName = name ? name === user.name : true;
    const isSameRole = role ? role === user.role : true;
    const isSamePassword = password
      ? await bcrypt.compare(password, user.password)
      : true;

    if (isSameName && isSameRole && isSamePassword) {
      return res
        .status(400)
        .json({ message: "No changes detected in the user data" });
    }

    // Build updates only for changed fields
    const updates = {};
    if (!isSameName) updates.name = name;
    if (!isSameRole) updates.role = role;
    if (!isSamePassword) {
      updates.password = await bcrypt.hash(password, 10);
    }

    // Apply updates
    await user.update(updates);

    res.status(200).json({
      message: "User updated successfully",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Validate input
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email is required to delete a user" });
    }

    // check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await user.destroy();

    // Success response
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export { createAdmin, modifyUser, createUser, deleteUser };
