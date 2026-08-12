import React from "react";
import GovernmentContractingInfo from "../components/GovernmentContractingInfo";
import Seo from "../components/Seo";

const GovernmentContractingPage: React.FC = () => {
  return (
    <div className="page-shell">
      <Seo
        title="Government Contracting | SunLife Facility Solutions"
        description="Government contracting information and approved facility service capabilities from SunLife Facility Solutions."
        canonicalPath="/government-contracting"
      />

      <header className="page-header">
        <div className="site-container">
          <div className="page-header-inner ml-0">
            <p className="eyebrow">Federal contractor profile</p>
            <h1 className="page-title">Government Contracting</h1>
            <p className="page-intro">
              SunLife Facility Solutions supports government and enterprise
              project requirements through its approved facility and operational
              service capabilities.
            </p>
          </div>
        </div>
      </header>

      <section className="section-block">
        <div className="site-container">
          <GovernmentContractingInfo />
        </div>
      </section>
    </div>
  );
};

export default GovernmentContractingPage;
