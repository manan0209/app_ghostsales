// routes/auth.js
import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { empId, password } = req.body;
  if (!empId || !password) {
    return res.status(400).json({ error: "Employee ID and password are required." });
  }

  try {
    // Find user by empId
    const user = await prisma.user.findUnique({ where: { empId } });
    if (!user) return res.status(400).json({ error: "Invalid credentials." });

    // Compare password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: "Invalid credentials." });

    // Create JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({
      token,
      user: {
        id: user.id,
        empId: user.empId,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// GET /auth/me - Returns the authenticated user's profile
router.get("/me", authenticate, (req, res) => {
  // The authenticate middleware attaches the user to req.user
  res.json(req.user);
});

export default router;
