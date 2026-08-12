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
      <div className="grid border-y border-gray-300 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="border-b border-gray-300 py-7 lg:border-b-0 lg:border-r lg:pr-10">
          <p className="eyebrow">Federal contractor credentials</p>
          <h2
            id="government-contracting-information"
            className="text-2xl font-bold leading-tight text-navy md:text-3xl"
          >
            Government Contracting Information
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Public verification information for contracting officers, prime
            contractors, and potential teaming partners.
          </p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([label, value]) => (
            <div key={label} className="border-b border-gray-200 px-0 py-5 sm:px-6 lg:last:border-b-0">
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {label}
              </dt>
              <dd className="mt-1.5 break-words text-sm font-semibold text-navy">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default GovernmentContractingInfo;
