import React from "react";

const AccessibilityPage: React.FC = () => {
  return (
    <main className="pt-20 pb-16" role="main">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
          Accessibility
        </h1>
        <p className="text-gray-700 mb-4">
          We aim to meet WCAG 2.2 AA standards. If you encounter barriers,
          please contact us and we will assist.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            High contrast color palette; orange text shifts to darker shade if
            needed
          </li>
          <li>Keyboard focus styles distinct from hover</li>
          <li>Semantic landmarks and ARIA where appropriate</li>
          <li>Form validation messages announced for screen readers</li>
        </ul>
      </div>
    </main>
  );
};

export default AccessibilityPage;
