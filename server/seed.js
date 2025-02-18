import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Seeding database...");

  // Hash password
  const hashedPassword = await bcrypt.hash("password123", 10);

  // Clear existing data to prevent duplication
  await prisma.user.deleteMany({});
  await prisma.team.deleteMany({});
  await prisma.lead.deleteMany({});
  await prisma.pipeline.deleteMany({});
  await prisma.campaign.deleteMany({});
  await prisma.company.deleteMany({});
  await prisma.subscriptionPlan.deleteMany({});

  // Create Subscription Plans
  const basicPlan = await prisma.subscriptionPlan.create({
    data: {
      name: "Basic Plan",
      maxUsers: 10,
      features: { lead_tracking: true, email_campaigns: false },
      price: 49.99,
    },
  });

  const proPlan = await prisma.subscriptionPlan.create({
    data: {
      name: "Pro Plan",
      maxUsers: 50,
      features: { lead_tracking: true, email_campaigns: true },
      price: 149.99,
    },
  });

  // Create Company
  const company = await prisma.company.create({
    data: {
      name: "Acme Corp",
      customDomain: "acme.ghostsales.com",
      subscriptionPlanId: proPlan.id,
    },
  });

  // Create Teams
  const teamAlpha = await prisma.team.create({
    data: {
      name: "Team Alpha",
      goals: "Increase Sales by 30%",
      companyId: company.id,
    },
  });

  const teamBeta = await prisma.team.create({
    data: {
      name: "Team Beta",
      goals: "Expand Market Reach",
      companyId: company.id,
    },
  });

  // Create Users & Assign Teams Directly
  await prisma.user.createMany({
    data: [
      {
        empId: "EMP1001",
        name: "Admin User",
        email: "admin@acme.com",
        password: hashedPassword,
        role: "admin",
        companyId: company.id,
      },
      {
        empId: "EMP1002",
        name: "Manager One",
        email: "manager1@acme.com",
        password: hashedPassword,
        role: "manager",
        companyId: company.id,
        teamId: teamAlpha.id,
      },
      {
        empId: "EMP1003",
        name: "Manager Two",
        email: "manager2@acme.com",
        password: hashedPassword,
        role: "manager",
        companyId: company.id,
        teamId: teamBeta.id,
      },
      {
        empId: "EMP1004",
        name: "Agent One",
        email: "agent1@acme.com",
        password: hashedPassword,
        role: "agent",
        companyId: company.id,
        teamId: teamAlpha.id,
      },
      {
        empId: "EMP1005",
        name: "Agent Two",
        email: "agent2@acme.com",
        password: hashedPassword,
        role: "agent",
        companyId: company.id,
        teamId: teamAlpha.id,
      },
      {
        empId: "EMP1006",
        name: "Agent Three",
        email: "agent3@acme.com",
        password: hashedPassword,
        role: "agent",
        companyId: company.id,
        teamId: teamBeta.id,
      },
      {
        empId: "EMP1007",
        name: "Agent Four",
        email: "agent4@acme.com",
        password: hashedPassword,
        role: "agent",
        companyId: company.id,
        teamId: teamBeta.id,
      },
    ],
  });

  // Create Leads
  await prisma.lead.createMany({
    data: [
      {
        companyId: company.id,
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        status: "new",
        createdBy: "EMP1004",
      },
      {
        companyId: company.id,
        name: "Jane Smith",
        email: "janesmith@example.com",
        phone: "987-654-3210",
        status: "in progress",
        createdBy: "EMP1005",
      },
    ],
  });

  // Create Pipelines
  await prisma.pipeline.createMany({
    data: [
      { companyId: company.id, stageName: "Lead Captured", order: 1 },
      { companyId: company.id, stageName: "Contacted", order: 2 },
      { companyId: company.id, stageName: "Proposal Sent", order: 3 },
      { companyId: company.id, stageName: "Negotiation", order: 4 },
      { companyId: company.id, stageName: "Closed Won", order: 5 },
    ],
  });

  // Create Campaigns
  await prisma.campaign.createMany({
    data: [
      { companyId: company.id, name: "Summer Promotion", status: "active" },
      { companyId: company.id, name: "End-of-Year Discount", status: "draft" },
    ],
  });

  console.log("✅ Mock data seeded successfully!");
}

// Run seeding function
main()
  .catch((error) => {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
