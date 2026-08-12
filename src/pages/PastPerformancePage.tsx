import React from "react";
import ContractAwardCard from "../components/ContractAwardCard";
import Seo from "../components/Seo";
import { selectedContractAwards } from "../data/contractAwards";

const PastPerformancePage: React.FC = () => {
  return (
    <div className="page-shell">
      <Seo
        title="Past Performance | SunLife Facility Solutions"
        description="Review selected government contract awards completed by SunLife Facility Solutions, organized by agency, project, and location."
        canonicalPath="/past-performance"
      />

      <header className="page-header">
        <div className="site-container">
          <div className="page-header-inner ml-0">
            <p className="eyebrow">Past Performance</p>
            <h1 className="page-title">Selected Contract Awards</h1>
            <p className="page-intro">
              A selected view of government contracting experience by agency,
              project, and location.
            </p>
          </div>
        </div>
      </header>

      <section className="section-block" aria-label="Selected contract awards">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Government experience</p>
              <h2 className="text-2xl font-bold text-navy">Award overview</h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
                Public award entries are limited to approved agency, project,
                and location information.
              </p>
            </div>
            <div className="border-t border-gray-300">
              {selectedContractAwards.map((award) => (
                <ContractAwardCard key={award.id} award={award} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastPerformancePage;
