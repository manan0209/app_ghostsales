// routes/campaigns.js
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

// Get all campaigns for the company
router.get('/', authenticateToken, async (req, res) => {
  try {
    const campaigns = await prisma.campaign.findMany({
      where: { companyId: req.user.companyId }
    });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
});

// Create a new campaign
router.post('/', authenticateToken, async (req, res) => {
  const { name, status } = req.body;
  try {
    const campaign = await prisma.campaign.create({
      data: {
        name,
        status: status || "draft",
        companyId: req.user.companyId
      }
    });
    res.status(201).json({ message: 'Campaign created', campaign });
  } catch (error) {
    res.status(500).json({ message: 'Error creating campaign', error });
  }
});

// Update a campaign
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;
  try {
    const existingCampaign = await prisma.campaign.findFirst({
      where: { id, companyId: req.user.companyId }
    });
    if (!existingCampaign) return res.status(404).json({ message: 'Campaign not found' });
    
    const updatedCampaign = await prisma.campaign.update({
      where: { id },
      data: { name, status }
    });
    res.json({ message: 'Campaign updated', campaign: updatedCampaign });
  } catch (error) {
    res.status(500).json({ message: 'Error updating campaign', error });
  }
});

// Delete a campaign
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const existingCampaign = await prisma.campaign.findFirst({
      where: { id, companyId: req.user.companyId }
    });
    if (!existingCampaign) return res.status(404).json({ message: 'Campaign not found' });
    
    await prisma.campaign.delete({ where: { id } });
    res.json({ message: 'Campaign deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting campaign', error });
  }
});

export default router;
