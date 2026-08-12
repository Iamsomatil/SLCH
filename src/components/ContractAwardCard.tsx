import React from "react";
import type { ContractAward } from "../data/contractAwards";

type ContractAwardCardProps = {
  award: ContractAward;
};

const ContractAwardCard: React.FC<ContractAwardCardProps> = ({ award }) => {
  return (
    <article className="border-b border-gray-300 py-7 md:py-8">
      <div className="border-l-2 border-gold pl-5 md:pl-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
          {award.agency}
        </p>
        <h2 className="mt-2 text-xl font-bold leading-snug text-navy md:text-2xl">
          {award.project}
        </h2>
        <dl className="mt-4 flex gap-2 text-sm text-gray-600">
          <dt className="font-semibold text-navy">Location:</dt>
          <dd>{award.location}</dd>
        </dl>
      </div>
    </article>
  );
};

export default ContractAwardCard;
