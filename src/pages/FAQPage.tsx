import React from "react";

const FAQPage: React.FC = () => {
  const faqs = [
    {
      q: "Do you align pricing with GSA per diem?",
      a: "Yes. We structure quotes to align with per diem and agency lodging policies wherever applicable.",
    },
    {
      q: "How fast can you place personnel?",
      a: "Typically within 24–72 hours in most markets, subject to availability.",
    },
    {
      q: "Can you work with POs and invoicing requirements?",
      a: "Yes. We support POs and agency-specific invoicing formats and can provide a W‑9 and other compliance documentation.",
    },
    {
      q: "Do you handle contractor housing near bases and installations?",
      a: "Yes. We routinely place personnel near bases, federal campuses, and training centers.",
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8 text-center">
          FAQs
        </h1>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white rounded-xl shadow-lg p-6">
              <summary className="cursor-pointer text-navy font-semibold">
                {f.q}
              </summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
