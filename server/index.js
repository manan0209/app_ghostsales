// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js'; // We'll create this next
import leadsRoutes from './routes/leads.js';
import pipelinesRoutes from './routes/pipelines.js';
import campaignsRoutes from './routes/campaigns.js';
import superadminRoutes from './routes/superadmin.js';

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
//app.use(cors({ origin: "https://app-ghostsales.vercel.app" }));
app.use(express.json());

// Define routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/leads', leadsRoutes);
app.use('/pipelines', pipelinesRoutes);
app.use('/campaigns', campaignsRoutes);
app.use('/superadmin', superadminRoutes);



app.get('/', (req, res) => {
  res.send('GhostSales Server is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

