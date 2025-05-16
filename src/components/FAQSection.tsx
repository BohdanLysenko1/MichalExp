import * as React from "react";
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

// Default comprehensive FAQ data for the dedicated FAQ page
const defaultFaqCategories = [
  {
    title: "📝 Before We Start",
    items: [
      {
        q: "What's your step-by-step remodeling process?",
        a: "Our process begins with an initial on-site consultation, continues through collaborative design and planning, permitting, demolition, construction, and ends with a detailed final walk-through to ensure every detail meets your expectations."
      },
      {
        q: "How far in advance should I book a project with you?",
        a: "We typically book projects 4–8 weeks in advance, depending on scope and season. The sooner you contact us, the better we can secure your preferred timeline."
      },
      {
        q: "Can I live in my home while the work is underway?",
        a: "In most cases, yes. We isolate the work area, install dust barriers, and coordinate work hours to minimize disruption. For extensive whole-home remodels, a temporary relocation may be recommended."
      },
      {
        q: "How accurate are your initial estimates—what's included and what isn't?",
        a: "Your preliminary estimate is based on current material pricing and the scope defined during consultation. It includes labor, materials, and standard site protection. Allowances, permits, and unforeseen conditions are outlined separately so there are no surprises."
      },
      {
        q: "Do you offer design services or work with outside designers/architects?",
        a: "We have an in-house design team and also collaborate seamlessly with external architects or interior designers you may already be working with."
      },
    ],
  },
  {
    title: "🔨 During the Project",
    items: [
      {
        q: "Who will be my main point of contact and how often will I get updates?",
        a: "You'll be assigned a dedicated project manager who provides daily progress updates and is available to answer questions throughout the build."
      },
      {
        q: "What hours and days will crews be on-site, and how noisy/messy will it be?",
        a: "Our crews generally work Monday–Friday, 8 a.m.–5 p.m. Power-tool noise is unavoidable at times, but we schedule the loudest tasks during mid-day and clean the site before leaving each evening."
      },
      {
        q: "How do you keep the job site clean and protect the rest of my home?",
        a: "We use dust-containment barriers, negative-air machines, and surface protection to isolate work areas and keep adjacent spaces clean."
      },
      {
        q: "What happens if hidden issues like mold or structural damage pop up?",
        a: "Should unforeseen conditions arise, we document the issue, present options and pricing, and obtain your approval before proceeding."
      },
      {
        q: "How do change orders affect the timeline and cost?",
        a: "Approved change orders are priced and scheduled as soon as possible. We update the project timeline so you always know the impact."
      },
      {
        q: "What brands or materials do you commonly recommend—and can I choose my own?",
        a: "We work with trusted brands known for durability, but you're free to specify any product you prefer. We'll confirm compatibility and availability."
      },
      {
        q: "How do you handle supply-chain delays or back-ordered items?",
        a: "We monitor lead times daily and order critical items early. If a delay arises, we'll present equivalent alternatives or resequence tasks to keep the project moving."
      },
    ],
  },
  {
    title: "✔️ After Completion",
    items: [
      {
        q: "Do you offer a workmanship warranty? If so, for how long?",
        a: "Yes—our workmanship is covered by a comprehensive 2-year warranty in addition to manufacturer warranties on materials."
      },
      {
        q: "Will you provide maintenance tips or care instructions for new finishes?",
        a: "Absolutely. You'll receive a customized care guide outlining cleaning products, recommended maintenance intervals, and warranty information."
      },
      {
        q: "What's the process for punch-list items or minor touch-ups?",
        a: "Before final payment we walk through the space with you to create a punch list. Touch-ups are completed within 5–10 business days."
      },
      {
        q: "Can I request additional upgrades later—do you keep project files on hand?",
        a: "We archive drawings, selections, and photos, making future upgrades straightforward—just reach out and we'll pick up where we left off."
      },
    ],
  },
];

type FAQItem = {
  q: string;
  a: string;
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

type FAQSectionProps = {
  faqData?: FAQCategory[];
};

export default function FAQSection({ faqData = defaultFaqCategories }: FAQSectionProps) {
  return (
    <section id="faq" className="w-full bg-[color:var(--background)]">
      <div className="container mx-auto px-4 max-w-3xl">
        {!faqData[0].title.includes("Frequently Asked Questions") && (
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-10 text-black">
            Frequently Asked Questions
          </h2>
        )}
        <div className="space-y-4">
          {faqData.map((cat, catIdx) => (
            <Disclosure
              key={catIdx}
              as="div"
              className="rounded-xl bg-[color:var(--secondary)] border border-[color:var(--primary)]/10 overflow-hidden"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className="flex w-full justify-between items-center px-6 py-4 text-lg font-semibold text-left text-black focus:outline-none transition-all hover:underline"
                  >
                    <span>{cat.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pb-4">
                    <div className="space-y-2">
                      {cat.items.map((faq, faqIdx) => (
                        <Disclosure
                          key={faqIdx}
                          as="div"
                          className="rounded-lg bg-[color:var(--secondary)] border border-[color:var(--primary)]/10 overflow-hidden"
                        >
                          {({ open: qOpen }) => (
                            <>
                              <Disclosure.Button
                                className={`disclosure-button flex w-full justify-between items-center px-5 py-3 text-base font-medium text-left text-black focus:outline-none transition-all hover:underline ${qOpen ? 'shadow-md' : 'hover:shadow'}`}
                              >
                                {faq.q}
                                <ChevronDown
                                  className={`h-4 w-4 ml-2 transition-transform duration-200 ${qOpen ? 'rotate-180' : ''}`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-5 pb-4 text-sm text-black">
                                {faq.a}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
