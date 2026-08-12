import React from "react";
import Seo from "../components/Seo";

const AccessibilityPage: React.FC = () => {
  return (
    <div className="page-shell">
      <Seo
        title="Accessibility | SunLife Facility Solutions"
        description="SunLife Facility Solutions website accessibility information and contact details."
        canonicalPath="/accessibility"
      />
      <header className="page-header">
        <div className="content-container">
          <p className="eyebrow">Website information</p>
          <h1 className="page-title">Accessibility</h1>
        </div>
      </header>
      <section className="section-block">
        <div className="content-container max-w-3xl">
          <p className="leading-7 text-gray-700">
            SunLife Facility Solutions is working to provide a website that is
            usable across devices and assistive technologies.
          </p>
          <p className="mt-5 leading-7 text-gray-700">
            If you encounter an accessibility barrier, email <a className="text-link" href="mailto:admin@sunlifehousingcorp.com">admin@sunlifehousingcorp.com</a> or call <a className="text-link" href="tel:+17544322302">(754) 432-2302</a> with the page and issue you encountered.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;
