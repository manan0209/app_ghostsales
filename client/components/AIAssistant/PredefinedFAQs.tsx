import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqCategories = [
  {
    category: "Dashboard Features",
    questions: [
      { q: "How do I customize my dashboard?", a: "You can customize your dashboard by..." },
      { q: "What do the different widgets represent?", a: "The widgets on your dashboard represent..." },
    ],
  },
  {
    category: "Lead Management",
    questions: [
      { q: "How do I add a new lead?", a: 'To add a new lead, click on the "Add Lead" button...' },
      { q: "How can I categorize my leads?", a: "You can categorize leads by using tags or custom fields..." },
    ],
  },
  {
    category: "Campaigns",
    questions: [
      { q: "How do I create a new campaign?", a: "To create a new campaign, navigate to the Campaigns section..." },
      {
        q: "How can I track campaign performance?",
        a: "You can track campaign performance through the analytics dashboard...",
      },
    ],
  },
  {
    category: "Integrations",
    questions: [
      { q: "What third-party tools can I integrate with?", a: "GhostSales integrates with various tools including..." },
      { q: "How do I set up email integration?", a: "To set up email integration, go to Settings > Integrations..." },
    ],
  },
]

const PredefinedFAQs: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqCategories.map((category, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-white hover:text-blue-400">{category.category}</AccordionTrigger>
          <AccordionContent>
            {category.questions.map((qa, qIndex) => (
              <div key={qIndex} className="mb-4">
                <h4 className="font-semibold text-blue-400">{qa.q}</h4>
                <p className="text-gray-300">{qa.a}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default PredefinedFAQs

