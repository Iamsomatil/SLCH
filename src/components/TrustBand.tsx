import React from 'react';

interface TrustBandProps {
  items?: string[];
}

const DEFAULT_ITEMS: string[] = [
  'Per Diem Friendly',
  'SAM Registration: TBD',
  'UEI: TBD',
  'CAGE: TBD',
  'NAICS: TBD',
];

const TrustBand: React.FC<TrustBandProps> = ({ items = DEFAULT_ITEMS }) => {
  return (
    <section aria-label="Compliance and trust information" className="bg-[color:var(--trustband-bg,theme(colors.brand.gray-50))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 text-center">
          {items.map((item) => (
            <li key={item} className="text-sm md:text-base text-navy bg-white rounded-lg px-3 py-2 shadow-soft">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBand;

