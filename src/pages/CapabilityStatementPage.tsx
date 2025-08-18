import React from "react";

const CapabilityStatementPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          Capability Statement
        </h1>
        <p className="text-gray-600 mb-8">
          Download our capability statement. Identifiers shown as placeholders
          until confirmed.
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          aria-label="Download Capability Statement PDF"
        >
          Download PDF (Placeholder)
        </a>
        <div className="mt-8 text-left bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-700">UEI: TBD</p>
          <p className="text-sm text-gray-700">CAGE: TBD</p>
          <p className="text-sm text-gray-700">SAM Registration: TBD</p>
          <p className="text-sm text-gray-700">NAICS: TBD</p>
        </div>
      </div>
    </div>
  );
};

export default CapabilityStatementPage;
