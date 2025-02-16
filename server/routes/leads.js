// routes/leads.js
import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Access Denied' });
  try {
    req.user = jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

// Get all leads for the authenticated user's company
router.get('/', authenticateToken, async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      where: { companyId: req.user.companyId }
    });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leads', error });
  }
});

// Create a new lead
router.post('/', authenticateToken, async (req, res) => {
  const { name, email, phone, status } = req.body;
  try {
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        status: status || "new",
        companyId: req.user.companyId,
        createdBy: req.user.id
      }
    });
    res.status(201).json({ message: 'Lead created successfully', lead });
  } catch (error) {
    res.status(500).json({ message: 'Error creating lead', error });
  }
});

// Update a lead
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, status } = req.body;
  try {
    // Ensure the lead belongs to the user's company
    const existingLead = await prisma.lead.findFirst({
      where: { id, companyId: req.user.companyId }
    });
    if (!existingLead) return res.status(404).json({ message: 'Lead not found' });

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: { name, email, phone, status }
    });
    res.json({ message: 'Lead updated', lead: updatedLead });
  } catch (error) {
    res.status(500).json({ message: 'Error updating lead', error });
  }
});

// Delete a lead
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    // Ensure the lead belongs to the user's company
    const existingLead = await prisma.lead.findFirst({
      where: { id, companyId: req.user.companyId }
    });
    if (!existingLead) return res.status(404).json({ message: 'Lead not found' });

    await prisma.lead.delete({ where: { id } });
    res.json({ message: 'Lead deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting lead', error });
  }
});

export default router;
