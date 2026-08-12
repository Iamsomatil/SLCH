import React from "react";
import Seo from "../components/Seo";

const PrivacyCompliancePage: React.FC = () => {
  return (
    <div className="page-shell">
      <Seo
        title="Privacy | SunLife Facility Solutions"
        description="SunLife Facility Solutions website privacy information."
        canonicalPath="/privacy"
      />
      <header className="page-header">
        <div className="content-container">
          <p className="eyebrow">Website information</p>
          <h1 className="page-title">Privacy</h1>
        </div>
      </header>
      <section className="section-block">
        <div className="content-container max-w-3xl">
          <p className="leading-7 text-gray-700">
            Information submitted through this website is used to review and
            respond to inquiries sent to SunLife Facility Solutions.
          </p>
          <p className="mt-5 leading-7 text-gray-700">
            Do not submit sensitive personal, financial, medical, export-controlled,
            or classified information through the public contact form.
          </p>
          <p className="mt-5 leading-7 text-gray-700">
            For questions about information submitted through this website,
            contact <a className="text-link" href="mailto:admin@sunlifehousingcorp.com">admin@sunlifehousingcorp.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyCompliancePage;
