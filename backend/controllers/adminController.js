import User from "./../models/User.js";
import bcrypt from "bcryptjs";

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    //validation
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "Name, email,password and role are required" });
    }

    //check if a user with this email already exists
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: "User Already exists" });
    }

    //user creation
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPass,
      role: role,
      verified: true,
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        verified: user.verified,
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

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "role", "createdAt", "updatedAt"],
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
export { modifyUser, createUser, deleteUser, getAllUsers };
