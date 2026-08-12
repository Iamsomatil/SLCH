import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DepartmentSeals from "../components/DepartmentSeals";
import Seo from "../components/Seo";

const partnershipAreas = [
  "Facility maintenance and specialty service delivery",
  "Remediation, pavement, elevator, and roofing work",
  "Protective services and operational support",
  "Government and commercial project coordination",
];

const PartnershipsPage: React.FC = () => {
  return (
    <div className="page-shell">
      <Seo
        title="Partnerships | SunLife Facility Solutions"
        description="Explore partnership and teaming opportunities with SunLife Facility Solutions across its approved service capabilities."
        canonicalPath="/partnerships"
      />

      <header className="page-header">
        <div className="site-container">
          <div className="page-header-inner ml-0">
            <p className="eyebrow">Working with SunLife</p>
            <h1 className="page-title">Partnerships</h1>
            <p className="page-intro">
              SunLife works with subcontractors, service providers, and business
              partners to support project requirements across its approved
              capabilities.
            </p>
          </div>
        </div>
      </header>

      <section className="section-block">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Collaboration</p>
            <h2 className="section-title">A practical approach to working together</h2>
            <p className="section-copy">
              SunLife values clear communication, defined project requirements,
              and coordinated service delivery. Partnership discussions are
              reviewed against the needs of each opportunity.
            </p>
          </div>

          <div className="border-t border-gray-200">
            {partnershipAreas.map((area, index) => (
              <div
                key={area}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-gray-200 py-5"
              >
                <span className="text-sm font-semibold text-gold-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium leading-6 text-navy">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-14 md:py-20">
        <div className="site-container">
          <DepartmentSeals />
        </div>
      </section>

      <section className="section-block">
        <div className="site-container flex flex-col justify-between gap-8 border-l-4 border-gold bg-navy px-6 py-9 text-white md:flex-row md:items-center md:px-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">Discuss a partnership</h2>
            <p className="mt-3 leading-7 text-gray-300">
              Contact SunLife to discuss a teaming, subcontracting, or service
              collaboration opportunity.
            </p>
          </div>
          <Link to="/contact" className="btn-accent flex-none">
            Contact SunLife
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;
