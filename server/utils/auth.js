import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const generatePassword = (length = 8) => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString("hex").slice(0, length);
};

export const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

/**
 * Sends an email. Accepts plain text and/or HTML.
 */
export const sendEmail = async (to, subject, text, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  await transporter.sendMail(mailOptions);
};
