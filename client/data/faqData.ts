export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  category: string
  items: FAQItem[]
}

export const faqData: FAQCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "How do I create an account?",
        answer:
          "To create an account, click on the 'Sign Up' button on the top right corner of the homepage. Fill in your details and follow the prompts to complete the registration process.",
      },
      {
        question: "What are the system requirements?",
        answer:
          "GhostSales is a cloud-based solution, so you only need a modern web browser (like Chrome, Firefox, or Safari) and a stable internet connection to use our software.",
      },
    ],
  },
  {
    category: "Lead Management",
    items: [
      {
        question: "How do I add a new lead?",
        answer:
          "To add a new lead, navigate to the 'Leads' page and click on the 'Add Lead' button. Fill in the required information in the form that appears and click 'Save'.",
      },
      {
        question: "Can I import leads from other systems?",
        answer:
          "Yes, you can import leads from CSV files. Go to the 'Leads' page, click on 'Import', and follow the instructions to upload your CSV file and map the fields.",
      },
    ],
  },
  {
    category: "Campaign Management",
    items: [
      {
        question: "How do I create a new campaign?",
        answer:
          "To create a new campaign, go to the 'Campaigns' page and click 'Create Campaign'. Fill in the campaign details, set your target audience, and choose your campaign type.",
      },
      {
        question: "How can I track the performance of my campaigns?",
        answer:
          "You can track campaign performance on the 'Campaign Analytics' dashboard. Here, you'll find metrics such as open rates, click-through rates, and conversion rates for each of your campaigns.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    items: [
      {
        question: "I can't log in to my account. What should I do?",
        answer:
          "If you're having trouble logging in, first ensure that you're using the correct email and password. If you've forgotten your password, use the 'Forgot Password' link on the login page. If you're still unable to log in, please contact our support team.",
      },
      {
        question: "The system is running slowly. How can I improve performance?",
        answer:
          "If the system is running slowly, try clearing your browser cache and cookies. Also, ensure you're using a supported browser version. If the issue persists, it may be due to your internet connection or our servers - please contact support if the problem continues.",
      },
    ],
  },
]

