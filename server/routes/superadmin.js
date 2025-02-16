// routes/superadmin.js
import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware: Only SUPERADMIN access
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

const authorizeSuperadmin = (req, res, next) => {
  if (req.user.role !== 'SUPERADMIN') return res.status(403).json({ message: 'Access Forbidden' });
  next();
};

// Example endpoint: Get overview of all companies
router.get('/companies', authenticateToken, authorizeSuperadmin, async (req, res) => {
  try {
    const companies = await prisma.company.findMany({
      include: { users: true, subscriptionPlan: true }
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error });
  }
});

export default router;
