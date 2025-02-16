// routes/pipelines.js
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

// Get pipeline stages for the authenticated user's company
router.get('/', authenticateToken, async (req, res) => {
  try {
    const stages = await prisma.pipeline.findMany({
      where: { companyId: req.user.companyId },
      orderBy: { order: 'asc' }
    });
    res.json(stages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pipelines', error });
  }
});

// Create a new pipeline stage
router.post('/', authenticateToken, async (req, res) => {
  const { stageName, order } = req.body;
  try {
    const stage = await prisma.pipeline.create({
      data: {
        stageName,
        order,
        companyId: req.user.companyId
      }
    });
    res.status(201).json({ message: 'Pipeline stage created', stage });
  } catch (error) {
    res.status(500).json({ message: 'Error creating pipeline stage', error });
  }
});

// Update a pipeline stage
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { stageName, order } = req.body;
  try {
    const existingStage = await prisma.pipeline.findFirst({
      where: { id, companyId: req.user.companyId }
    });
    if (!existingStage) return res.status(404).json({ message: 'Stage not found' });

    const updatedStage = await prisma.pipeline.update({
      where: { id },
      data: { stageName, order }
    });
    res.json({ message: 'Pipeline stage updated', stage: updatedStage });
  } catch (error) {
    res.status(500).json({ message: 'Error updating pipeline stage', error });
  }
});

// Delete a pipeline stage
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const existingStage = await prisma.pipeline.findFirst({
      where: { id, companyId: req.user.companyId }
    });
    if (!existingStage) return res.status(404).json({ message: 'Stage not found' });

    await prisma.pipeline.delete({ where: { id } });
    res.json({ message: 'Pipeline stage deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pipeline stage', error });
  }
});

export default router;
