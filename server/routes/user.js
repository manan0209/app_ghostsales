// routes/user.js
import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { authenticate, authorize } from "../middleware/auth.js";
import { generatePassword, hashPassword, sendEmail } from "../utils/auth.js";
import { welcomeEmailTemplate } from "../utils/emailTemplates.js";

const router = Router();

// routes/user.js (backend snippet for create user)
router.post("/create", authenticate, authorize("admin"), async (req, res) => {
  const { name, email, role } = req.body;
  const companyId = req.user.companyId;

  if (!name || !role) {
    return res.status(400).json({ error: "Missing required fields: name, role" });
  }

  try {
    // Auto-generate an empId, e.g., "EMP" + random 4-digit number
    const empId = "EMP" + Math.floor(1000 + Math.random() * 9000);
    const plainPassword = generatePassword(8);
    const hashed = await hashPassword(plainPassword);

    const newUser = await prisma.user.create({
      data: {
        name,
        empId,
        email,
        password: hashed,
        role,
        companyId,
      },
    });

    // Prepare personalized welcome email HTML content.
    const emailHtml = welcomeEmailTemplate({
      name: newUser.name,
      role: newUser.role,
      manager: "Your Manager's Name", // Update as needed
      team: "Your Team",              // Update as needed
      empId: newUser.empId,
      temporaryPassword: plainPassword,
    });

    if (email) {
      await sendEmail(
        email,
        "Your GhostSales Account Credentials",
        undefined,
        emailHtml
      );
    }

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).json({ error: "Error creating user." });
  }
});


// Update User (ADMIN only)
router.put("/update/:id", authenticate, authorize("admin"), async (req, res) => {
  const { id } = req.params;
  const { email, role } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { email, role },
    });
    res.json({ user: updatedUser });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ error: "Error updating user." });
  }
});

// Delete User (ADMIN only)
router.delete("/delete/:id", authenticate, authorize("admin"), async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id } });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ error: "Error deleting user." });
  }
});

// List Users for the current company
// routes/user.js - List Users endpoint
router.get("/list", authenticate, authorize("admin"), async (req, res) => {
  console.log("Authenticated user in list route:", req.user); // Debug log
  try {
    const users = await prisma.user.findMany({
      where: { companyId: req.user.companyId },
      select: { id: true, empId: true, name: true, email: true, role: true },
    });
    res.json({ users });
  } catch (error) {
    console.error("List users error:", error);
    res.status(500).json({ error: "Error listing users." });
  }
});


export default router;
