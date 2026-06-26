import type { FAQItem } from "@/types/faq";

export const faqs: FAQItem[] = [
  {
    id: "pricing",
    question: "How does the pricing matrix actually work?",
    answer:
      "Every plan has a base rate that gets multiplied by your selected currency rate and billing cycle modifier. Annual billing applies a 20% discount automatically — no hidden fees, no manual recalculation.",
  },
  {
    id: "integrations",
    question: "Do you support custom integrations?",
    answer:
      "Yes. With 200+ pre-built connectors plus a webhook and API layer, you can wire FluxMind into virtually any existing data stack within minutes.",
  },
  {
    id: "scaling",
    question: "What happens during traffic spikes?",
    answer:
      "FluxMind auto-scales pipeline workers based on real-time load. Customers have handled 10x traffic spikes without manual intervention or downtime.",
  },
  {
    id: "support",
    question: "What support is included with each plan?",
    answer:
      "Starter includes email support, Pro adds priority support with faster SLAs, and Enterprise comes with a dedicated support engineer and contractual SLA guarantees.",
  },
  {
    id: "trial",
    question: "Is there a free trial?",
    answer:
      "Yes, every plan includes a 14-day trial with full feature access. No credit card required to get started.",
  },
];