import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const teamMembers = [
  { name: "Hosea Barnwell", title: "Chief Executive Officer" },
  { name: "Troy Austria", title: "Chief Operating Officer" },
  { name: "Samson Akinsanya", title: "Chief Technology Officer" },
  { name: "Florita Lara", title: "Operations Coordinator" },
  { name: "Maria Turqueza", title: "Administrator" },
  { name: "Christy Mayol", title: "Support Services" },
  { name: "Marteena Kyla", title: "Business Development Representative" },
  { name: "Noelle Sevidal", title: "Business Development Representative" },
  { name: "Leslie Tajale", title: "Procurement Specialist" },
];

const values = [
  ["Excellence", "A disciplined approach to service delivery and project support."],
  ["Integrity", "Clear communication and accountable business practices."],
  ["Innovation", "Continuous improvement in processes and service coordination."],
  ["Care", "Attention to client requirements and the people affected by the work."],
] as const;

const AboutPage: React.FC = () => {
  return (
    <div className="page-shell">
      <Seo
        title="About | SunLife Facility Solutions"
        description="Learn about SunLife Facility Solutions, the public-facing DBA of SunLife Corporate Housing LLC."
        canonicalPath="/about"
      />
      <header className="page-header">
        <div className="site-container">
          <div className="page-header-inner ml-0">
            <p className="eyebrow">Company</p>
            <h1 className="page-title">About SunLife Facility Solutions</h1>
            <p className="page-intro">
              SunLife Facility Solutions is the public-facing DBA of SunLife
              Corporate Housing LLC, providing facility and operational services
              for government and enterprise requirements.
            </p>
          </div>
        </div>
      </header>

      <section className="section-block">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <img
            src="/Services/facility.webp"
            alt="Facility professionals coordinating service work"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="section-title">Clear coordination. Defined requirements.</h2>
            <p className="section-copy">
              SunLife supports facility maintenance, remediation, pavement,
              elevator, roofing, protective, and specialty-service requirements.
              Work is coordinated around the approved scope, project
              communication, and operational needs.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-gray-600">
              The company works with subcontractors and service partners where
              project requirements call for coordinated capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-14 md:py-20">
        <div className="site-container grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-2">
          <article className="bg-white p-7 md:p-9">
            <p className="eyebrow">Mission</p>
            <h2 className="text-2xl font-bold text-navy">Dependable operational support</h2>
            <p className="mt-4 leading-7 text-gray-600">
              To streamline administrative and operational support with
              dependable teams and processes, bringing clarity and consistency
              to each engagement.
            </p>
          </article>
          <article className="bg-white p-7 md:p-9">
            <p className="eyebrow">Vision</p>
            <h2 className="text-2xl font-bold text-navy">A trusted service partner</h2>
            <p className="mt-4 leading-7 text-gray-600">
              To be recognized for professionalism, clear coordination, and
              reliable support across government and commercial requirements.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Principles</p>
            <h2 className="section-title">How SunLife approaches the work</h2>
          </div>
          <div className="border-t border-gray-300">
            {values.map(([title, description], index) => (
              <article key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-gray-300 py-5">
                <span className="text-sm font-semibold text-gold-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-14 md:py-20">
        <div className="site-container">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Leadership and operations</p>
            <h2 className="section-title">SunLife team</h2>
          </div>
          <div className="grid border-l border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="border-b border-r border-gray-200 bg-white p-6">
                <h3 className="font-bold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{member.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container flex flex-col justify-between gap-7 bg-navy px-6 py-9 text-white md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-2xl font-bold">Talk with SunLife</h2>
            <p className="mt-2 text-gray-300">Discuss a service requirement or business opportunity.</p>
          </div>
          <Link to="/contact" className="btn-accent flex-none">
            Contact the team <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
