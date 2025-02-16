// seed.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

async function main() {
  // Hash a sample password (e.g., "password123")
  const hashedPassword = await bcrypt.hash("password123", 10);

  // Create a subscription plan (for advanced SaaS features)
  const subscriptionPlan = await prisma.subscriptionPlan.upsert({
    where: { name: "Basic Plan" },
    update: {},
    create: {
      name: "Basic Plan",
      maxUsers: 20,
      features: JSON.stringify(["leads", "pipelines", "campaigns", "userManagement"]),
      price: 9.99,
    },
  });

  // Upsert a sample company (avoids duplicate error if it already exists)
  const company = await prisma.company.upsert({
    where: { name: "Test Company" },
    update: {
      customDomain: "test.ghostsales.com",
      subscriptionPlanId: subscriptionPlan.id,
    },
    create: {
      name: "Test Company",
      customDomain: "test.ghostsales.com",
      subscriptionPlanId: subscriptionPlan.id,
    },
  });

  // Create a Superadmin user (for overall platform management)
  const superadminUser = await prisma.user.upsert({
    where: { empId: "EMP0001" },
    update: {},
    create: {
      empId: "EMP0001",
      name: "Superadmin User",
      email: "superadmin@example.com",
      password: hashedPassword,
      role: "superadmin",
      companyId: company.id,
    },
  });

  // Create sample users for the company
  const adminUser = await prisma.user.upsert({
    where: { empId: "EMP1001" },
    update: {},
    create: {
      empId: "EMP1001",
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
      companyId: company.id,
    },
  });

  const managerUser = await prisma.user.upsert({
    where: { empId: "EMP1002" },
    update: {},
    create: {
      empId: "EMP1002",
      name: "Manager User",
      email: "manager@example.com",
      password: hashedPassword,
      role: "manager",
      companyId: company.id,
    },
  });

  const agentUser1 = await prisma.user.upsert({
    where: { empId: "EMP1003" },
    update: {},
    create: {
      empId: "EMP1003",
      name: "Agent User One",
      email: "agent1@example.com",
      password: hashedPassword,
      role: "agent",
      companyId: company.id,
    },
  });

  const agentUser2 = await prisma.user.upsert({
    where: { empId: "EMP1004" },
    update: {},
    create: {
      empId: "EMP1004",
      name: "Agent User Two",
      email: "agent2@example.com",
      password: hashedPassword,
      role: "agent",
      companyId: company.id,
    },
  });

  // Create sample leads
  const lead1 = await prisma.lead.upsert({
    where: { id: "lead-1" },
    update: {},
    create: {
      id: "lead-1",
      name: "Lead One",
      email: "lead1@example.com",
      phone: "1234567890",
      status: "new",
      companyId: company.id,
      createdBy: adminUser.id,
    },
  });

  const lead2 = await prisma.lead.upsert({
    where: { id: "lead-2" },
    update: {},
    create: {
      id: "lead-2",
      name: "Lead Two",
      email: "lead2@example.com",
      phone: "0987654321",
      status: "contacted",
      companyId: company.id,
      createdBy: managerUser.id,
    },
  });

  const lead3 = await prisma.lead.upsert({
    where: { id: "lead-3" },
    update: {},
    create: {
      id: "lead-3",
      name: "Lead Three",
      email: "lead3@example.com",
      phone: "5551234567",
      status: "qualified",
      companyId: company.id,
      createdBy: agentUser1.id,
    },
  });

  const lead4 = await prisma.lead.upsert({
    where: { id: "lead-4" },
    update: {},
    create: {
      id: "lead-4",
      name: "Lead Four",
      email: "lead4@example.com",
      phone: "5559876543",
      status: "lost",
      companyId: company.id,
      createdBy: agentUser2.id,
    },
  });

  // Create sample pipeline stages
  const pipelineStage1 = await prisma.pipeline.upsert({
    where: { id: "pipeline-1" },
    update: {},
    create: {
      id: "pipeline-1",
      stageName: "Initial Contact",
      order: 1,
      companyId: company.id,
    },
  });

  const pipelineStage2 = await prisma.pipeline.upsert({
    where: { id: "pipeline-2" },
    update: {},
    create: {
      id: "pipeline-2",
      stageName: "Follow-Up",
      order: 2,
      companyId: company.id,
    },
  });

  const pipelineStage3 = await prisma.pipeline.upsert({
    where: { id: "pipeline-3" },
    update: {},
    create: {
      id: "pipeline-3",
      stageName: "Negotiation",
      order: 3,
      companyId: company.id,
    },
  });

  const pipelineStage4 = await prisma.pipeline.upsert({
    where: { id: "pipeline-4" },
    update: {},
    create: {
      id: "pipeline-4",
      stageName: "Closed Won",
      order: 4,
      companyId: company.id,
    },
  });

  const pipelineStage5 = await prisma.pipeline.upsert({
    where: { id: "pipeline-5" },
    update: {},
    create: {
      id: "pipeline-5",
      stageName: "Closed Lost",
      order: 5,
      companyId: company.id,
    },
  });

  // Create sample campaigns
  const campaign1 = await prisma.campaign.upsert({
    where: { id: "campaign-1" },
    update: {},
    create: {
      id: "campaign-1",
      name: "Spring Campaign",
      status: "active",
      companyId: company.id,
    },
  });

  const campaign2 = await prisma.campaign.upsert({
    where: { id: "campaign-2" },
    update: {},
    create: {
      id: "campaign-2",
      name: "Summer Campaign",
      status: "draft",
      companyId: company.id,
    },
  });

  console.log("Seed data created:", {
    subscriptionPlan,
    company,
    superadminUser,
    adminUser,
    managerUser,
    agentUser1,
    agentUser2,
    leads: [lead1, lead2, lead3, lead4],
    pipelineStages: [pipelineStage1, pipelineStage2, pipelineStage3, pipelineStage4, pipelineStage5],
    campaigns: [campaign1, campaign2],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
