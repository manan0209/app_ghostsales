import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { empId, password } = req.body;
  if (!empId || !password) {
    return res
      .status(400)
      .json({ error: "Employee ID and password are required." });
  }

  try {
    // Find user by empId
    const user = await prisma.user.findUnique({
      where: { empId },
    });

    if (!user) return res.status(400).json({ error: "Invalid credentials." });

    // Compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ error: "Invalid credentials." });

    // Update lastLogin and set onlineStatus to true
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        lastLogin: new Date(),
        onlineStatus: true,
      },
    });

    // Create JWT with tenant ID for multi-tenancy
    const token = jwt.sign(
      { userId: user.id, companyId: user.companyId },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      token,
      user: {
        id: user.id,
        empId: user.empId,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
        lastLogin: updatedUser.lastLogin, // Include last login timestamp
        onlineStatus: updatedUser.onlineStatus, // Include online status
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

router.post("/logout", authenticate, async (req, res) => {
  try {
    await prisma.user.update({
      where: { id: req.user.userId }, // Ensure correct reference
      data: { onlineStatus: false },
    });

    res.json({ message: "Logged out successfully." });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// GET /auth/me - Returns the authenticated user's profile
router.get("/me", authenticate, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        empId: true,
        email: true,
        role: true,
        companyId: true,
        lastLogin: true,
        onlineStatus: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(user);
  } catch (error) {
    console.error("Auth me error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

export default router;
