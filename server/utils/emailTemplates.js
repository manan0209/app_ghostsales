export const welcomeEmailTemplate = ({
  name,
  role,
  manager,
  team,
  empId,
  temporaryPassword,
  logoUrl = "https://i.imgur.com/lMis83j.png"
}) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to GhostSales – Your Journey Begins Today</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
      
      body {
        margin: 0;
        padding: 0;
        background-color: #ffffff; /* White background */
        color: #333333;            /* Dark grey text for a softer look */
        font-family: 'Inter', sans-serif;
      }
      
      .container {
        max-width: 600px;
        margin: 30px auto;
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      
      .header {
        background-color: #f7f7f7; /* Light grey header */
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .header img {
        max-height: 70px;
        display: block;
        margin: 0 auto;
      }
      
      .title {
        margin-top: 10px;
        font-size: 24px;
        font-weight: 700;
        color: #000000;
      }
      
      .content {
        padding: 20px 30px;
      }
      
      .content h2 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #000000;
      }
      
      .info-list {
        list-style: none;
        padding: 0;
        margin: 10px 0;
      }
      .info-list li {
        margin: 6px 0;
      }
      
      .highlight {
        font-weight: 600;
      }
      
      .button {
        display: inline-block;
        margin-top: 20px;
        background-color: #000000; /* Black button */
        color: #ffffff;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 600;
        transition: background-color 0.3s;
      }
      
      .button:hover {
        background-color: #333333;
      }
      
      .footer {
        text-align: center;
        padding: 15px 20px;
        font-size: 12px;
        color: #666666;
        border-top: 1px solid #e0e0e0;
        background-color: #fafafa;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header Section -->
      <div class="header">
        <img src="${logoUrl}" alt="GhostSales Logo" />
        <div class="title">Welcome to GhostSales, ${name}!</div>
      </div>
      
      <!-- Content Section -->
      <div class="content">
        <h2>Welcome aboard – Your Journey Begins Today!</h2>
        <p>
          Dear <span class="highlight">${name}</span>,
          <br />
          We're thrilled to welcome you to GhostSales – the cutting-edge platform designed to supercharge your sales and collaboration. As part of our elite team, you'll have access to the best software tools available, along with our built-in Training FAQ Module to guide you every step of the way.
        </p>
        <p><strong>Your account details:</strong></p>
        <ul class="info-list">
          <li><strong>Employee ID:</strong> ${empId}</li>
          <li><strong>Role:</strong> ${role}</li>
          <li><strong>Manager:</strong> ${manager}</li>
          <li><strong>Team:</strong> ${team}</li>
        </ul>
        <p>Your temporary password is: <strong>${temporaryPassword}</strong></p>
        <p>
          Click below to log in and start exploring your new tools. Don't forget to change your password immediately after logging in.
        </p>
        <a href="https://appghostsales.vercel.app" class="button">Login Now</a>
        <p>
          If you have any questions, please reach out to your manager or our support team. We’re here to ensure you have a fantastic experience!
        </p>
      </div>
      
      <!-- Footer Section -->
      <div class="footer">
        <p>&copy; ${new Date().getFullYear()} GhostSales. All rights reserved.</p>
        <p>
          <em>
            P.S. Please mark this email as "Important" to receive all future updates and resources from GhostSales.
          </em>
        </p>
      </div>
    </div>
  </body>
</html>
`;
