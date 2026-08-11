import React from "react";
import { governmentContractingInfo } from "../data/governmentContractingInfo";

const GovernmentContractingInfo: React.FC = () => {
  const items = [
    ["Legal Company Name", governmentContractingInfo.legalName],
    ["DBA", governmentContractingInfo.dba],
    ["UEI", governmentContractingInfo.uei],
    ["CAGE Code", governmentContractingInfo.cageCode],
    ["SAM.gov Registration", governmentContractingInfo.samRegistration],
    ["Business Classification", governmentContractingInfo.businessClassification],
    ["Core NAICS Codes", governmentContractingInfo.coreNaicsCodes.join(", ")],
  ] as const;

  return (
    <section aria-labelledby="government-contracting-information">
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
            Federal Contractor Credentials
          </p>
          <h2
            id="government-contracting-information"
            className="text-2xl font-bold text-navy md:text-3xl"
          >
            Government Contracting Information
          </h2>
        </div>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([label, value]) => (
            <div key={label} className="min-w-0">
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {label}
              </dt>
              <dd className="mt-1 break-words text-sm font-medium text-navy">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default GovernmentContractingInfo;
