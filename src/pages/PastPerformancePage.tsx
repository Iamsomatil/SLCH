import React from "react";
import ContractAwardCard from "../components/ContractAwardCard";
import Seo from "../components/Seo";
import { selectedContractAwards } from "../data/contractAwards";

const PastPerformancePage: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-16 pt-20">
      <Seo
        title="Past Performance | SunLife Facility Solutions"
        description="Review selected government contract awards completed by SunLife Facility Solutions, organized by agency, project, and location."
        canonicalPath="/past-performance"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl pt-12 text-center md:pt-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            Past Performance
          </p>
          <h1 className="mb-5 text-4xl font-bold text-navy md:text-5xl">
            Selected Contract Awards
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Explore selected government contract awards by agency, project, and
            location.
          </p>
        </header>

        <section aria-label="Selected contract awards">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {selectedContractAwards.map((award) => (
              <ContractAwardCard key={award.id} award={award} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PastPerformancePage;
