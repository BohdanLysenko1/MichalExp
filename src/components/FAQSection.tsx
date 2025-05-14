import * as React from "react";
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How long does a typical remodel take?",
    a: "Project timelines vary by size and complexity. Most kitchen or bathroom remodels take 2–6 weeks. We'll provide a detailed schedule before work begins."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes! MichalExp is fully licensed and insured for all remodeling work in Chicago and surrounding suburbs."
  },
  {
    q: "Can you help with design and material selection?",
    a: "Absolutely. We offer full design consultations and can guide you through material choices to match your vision and budget."
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Chicago and the surrounding suburbs. Contact us to see if we work in your area!"
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes, we provide free, no-obligation estimates for all projects."
  },
  {
    q: "How do you handle project changes or surprises?",
    a: "We communicate transparently and work with you on any changes or unexpected issues, always providing updated timelines and costs."
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  return (
    <section id="faq" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="w-full">
          {faqs.map(({ q, a }, i) => (
            <Disclosure key={i} as="div" className="mb-2 rounded-xl bg-blue-50 border border-blue-100 overflow-hidden transition-shadow">
              {({ open }) => {
                const isOpen = openIdx === i;
                return (
                  <>
                    <Disclosure.Button
                      className={
                        `flex w-full justify-between items-center px-6 py-4 text-lg font-medium text-left text-gray-900 focus:outline-none transition-all hover:underline ${isOpen ? 'shadow-md' : 'hover:shadow'}`
                      }
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                    >
                      {q}
                      <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel static={isOpen} className="px-6 pb-6 text-gray-700 text-base">
                      {a}
                    </Disclosure.Panel>
                  </>
                );
              }}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
