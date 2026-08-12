import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Seo from "../components/Seo";
import { serviceCapabilities } from "../data/services";

const ServicesPage: React.FC = () => {
  return (
    <div className="page-shell">
      <Seo
        title="Services | SunLife Facility Solutions"
        description="Review SunLife Facility Solutions capabilities for facility maintenance, remediation, pavement, elevator, roofing, protective, and specialty services."
        canonicalPath="/services"
      />
      <header className="page-header">
        <div className="site-container">
          <div className="page-header-inner ml-0">
            <p className="eyebrow">Capabilities</p>
            <h1 className="page-title">Facility and Operational Services</h1>
            <p className="page-intro">
              SunLife Facility Solutions provides approved capabilities for
              government and enterprise facility requirements.
            </p>
          </div>
        </div>
      </header>

      <section className="section-block">
        <div className="site-container">
          <div className="grid grid-cols-1 border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceCapabilities.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-12 md:py-16">
        <div className="site-container flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Project requirements</p>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">
              Discuss the scope with SunLife
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Contact the team to review project requirements and the relevant
              service capability.
            </p>
          </div>
          <Link to="/contact" className="btn-primary flex-none">
            Contact SunLife
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
