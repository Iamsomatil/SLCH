import React from "react";
import { Building2, MapPin } from "lucide-react";
import type { ContractAward } from "../data/contractAwards";

type ContractAwardCardProps = {
  award: ContractAward;
};

const ContractAwardCard: React.FC<ContractAwardCardProps> = ({ award }) => {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start gap-3">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold/10">
          <Building2 className="h-5 w-5 text-gold" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Agency
          </p>
          <p className="break-words font-semibold leading-snug text-navy">
            {award.agency}
          </p>
        </div>
      </div>

      <div className="flex-1">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Project
        </p>
        <h2 className="break-words text-xl font-bold leading-snug text-navy">
          {award.project}
        </h2>
      </div>

      <div className="mt-6 flex items-start gap-2 border-t border-gray-100 pt-4">
        <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Location
          </p>
          <p className="break-words text-sm text-gray-700">{award.location}</p>
        </div>
      </div>
    </article>
  );
};

export default ContractAwardCard;
