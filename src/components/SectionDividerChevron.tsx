import React from 'react';

interface SectionDividerChevronProps {
  className?: string;
}

const SectionDividerChevron: React.FC<SectionDividerChevronProps> = ({ className }) => {
  return (
    <div aria-hidden="true" className={className}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 md:h-16">
        <path d="M0,0 L720,80 L1440,0 L1440,80 L0,80 Z" fill="#0D2B4C" fillOpacity="0.04" />
      </svg>
    </div>
  );
};

export default SectionDividerChevron;

