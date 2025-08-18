import React from "react";

const PrivacyCompliancePage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          Privacy & Compliance
        </h1>
        <p className="text-gray-700 mb-4">
          We maintain privacy-respectful operations and take precautions
          appropriate for housing government personnel and contractors. We do
          not claim certifications not held.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Resident privacy and limited data collection</li>
          <li>Backgrounded vendors where applicable</li>
          <li>Insurance certificates available upon request</li>
          <li>Documentation suitable for agency review</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyCompliancePage;
