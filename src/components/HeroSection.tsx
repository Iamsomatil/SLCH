import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white pt-20">
      <div className="site-container grid min-h-[620px] items-stretch lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col justify-center py-16 pr-0 md:py-20 lg:pr-14">
          <p className="eyebrow">Government facility services</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            Facility solutions built around operational requirements.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            SunLife Facility Solutions provides facility maintenance,
            remediation, pavement, elevator, roofing, protective, and specialty
            services for government and enterprise clients.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/services" className="btn-primary">
              Explore capabilities
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/past-performance" className="btn-secondary">
              View past performance
            </Link>
          </div>
        </div>

        <div className="relative min-h-[340px] lg:min-h-full">
          <img
            src="/hero-img.jpeg"
            alt="Facility maintenance team performing building service work"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 border-l-4 border-gold bg-navy/95 px-6 py-5 text-white sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              SunLife Facility Solutions
            </p>
            <p className="mt-1 text-sm text-gray-200">
              A DBA of SunLife Corporate Housing LLC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
