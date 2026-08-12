import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Phone, Mail } from 'lucide-react';
import Seo from '../components/Seo';

const serviceDetails = {
  'remediation': {
    title: 'Asbestos, Mold, and Lead Remediation',
    description: 'Remediation support organized around documented site conditions and project requirements.',
    longDescription: 'SunLife supports asbestos, mold, and lead remediation work based on the documented project scope, site conditions, and required coordination.',
    features: [
      'Asbestos abatement (containment, removal, disposal)',
      'Mold assessment, remediation, and clearance testing',
      'Lead remediation support',
      'Industrial hygiene coordination',
      'HEPA vacuuming and negative air systems',
      'Detailed reporting and documentation'
    ],
    benefits: [
      'Restores healthy, habitable spaces',
      'Work organized around documented requirements',
      'Coordinated project scheduling',
      'Clear, auditable documentation'
    ],
    image: '/Services/asbestos.webp'
  },
  'preventative-maintenance': {
    title: 'Preventative Maintenance Services',
    description: 'Planned programs to minimize downtime and extend asset life.',
    longDescription: 'Our preventative maintenance programs are tailored to your mission needs. We schedule inspections, service critical systems, and proactively address issues to reduce failures, extend equipment life, and control total cost of ownership.',
    features: [
      'Asset inventory and PM scheduling',
      'Routine inspections and service logs',
      'Predictive upkeep and condition monitoring',
      'Work order and CMMS integration',
      'Response and escalation procedures'
    ],
    benefits: [
      'Reduced unexpected downtime',
      'Extended asset lifespan',
      'Improved compliance and audit readiness',
      'Lower total cost of ownership'
    ],
    image: '/Services/preventive.webp'
  },
  'pavement-services': {
    title: 'Pavement Maintenance and Services',
    description: 'Repair and maintain roads, lots, and walkways for safety and longevity.',
    longDescription: 'We maintain and restore pavements across installations and campuses. From crack sealing and sealcoating to striping and ADA upgrades, our crews deliver durable, compliant results with minimal operational disruption.',
    features: [
      'Crack sealing and patching',
      'Sealcoating and resurfacing',
      'Striping, markings, and ADA compliance',
      'Parking lot repairs and reconfiguration',
      'Sidewalk and walkway remediation'
    ],
    benefits: [
      'Improved safety and accessibility',
      'Extended pavement life',
      'Compliance with ADA and local codes',
      'Enhanced curb appeal'
    ],
    image: '/Services/pavement.webp'
  },
  'elevator-services': {
    title: 'Elevator Maintenance and Services',
    description: 'Reliable elevator upkeep and modernization for safe, efficient transport.',
    longDescription: 'SunLife supports routine maintenance, corrective repair, and modernization requirements for elevators and vertical transport systems based on the approved project scope.',
    features: [
      'Routine inspections and lubrication',
      'Corrective repairs and parts replacement',
      'Modernization and controller upgrades',
      'Safety testing and compliance documentation',
      'Service response coordination'
    ],
    benefits: [
      'Greater system uptime and reliability',
      'Improved rider safety and comfort',
      'Regulatory compliance assurance',
      'Extended equipment lifespan'
    ],
    image: '/Services/elevator.webp'
  },
  'facility-support': {
    title: 'Facility Support and Specialty Services',
    description: 'Special projects and support operations tailored to mission needs.',
    longDescription: 'SunLife provides specialty facility support for defined project needs, including specialty cleaning, minor renovations, operational support, and vendor coordination.',
    features: [
      'Specialty cleaning and sanitation',
      'Minor renovations and finish work',
      'Event and mission logistics support',
      'Vendor and subcontractor coordination',
      'Schedule coordination'
    ],
    benefits: [
      'Flexible, scalable support',
      'Support aligned with operational needs',
      'Single point of contact for coordination',
      'Improved continuity of operations'
    ],
    image: '/Services/facility.webp'
  },
  'roofing': {
    title: 'Roofing',
    description: 'Roofing support for facility repair, replacement, and maintenance projects.',
    longDescription: 'SunLife Facility Solutions supports roofing projects from initial site review through coordinated repair, replacement, and maintenance work. Services are organized around the documented project scope, facility requirements, and site schedule.',
    features: [
      'Existing roof condition review',
      'Repair and replacement planning',
      'Roofing installation and repair',
      'Preventative maintenance coordination',
      'Project documentation and closeout'
    ],
    benefits: [
      'Clear project scope and coordination',
      'Planned work around facility requirements',
      'Documented project progress',
      'Support for ongoing roof condition needs'
    ],
    image: '/Services/roofing.jpg'
  },
  'protective-services': {
    title: 'Protective Services',
    description: 'Unarmed protective services structured around site-specific access, observation, and reporting needs.',
    longDescription: 'SunLife Facility Solutions provides unarmed protective services aligned with site-specific post instructions and operating requirements. Work may include entry-point presence, routine observation, patrol support, and incident documentation as defined by the approved scope.',
    features: [
      'Unarmed site presence',
      'Entry-point and access support',
      'Routine observation and patrol support',
      'Incident documentation',
      'Site-specific post procedures'
    ],
    benefits: [
      'Visible, professional site presence',
      'Consistent observation and reporting',
      'Support for established access procedures',
      'Documentation aligned with site requirements'
    ],
    image: '/Services/protective-services.jpg'
  }
};

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="page-shell">
        <div className="site-container py-24 text-center">
          <h1 className="text-3xl font-bold text-navy md:text-4xl">Service not found</h1>
          <Link to="/services" className="text-link mt-6 inline-flex">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <Seo
        title={`${service.title} | SunLife Facility Solutions`}
        description={service.description}
        canonicalPath={`/services/${slug}`}
      />

      <header className="page-header">
        <div className="site-container">
          <Link
            to="/services"
            className="text-link inline-flex items-center text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to Services
          </Link>
          <div className="page-header-inner ml-0 pt-7">
            <p className="eyebrow">Service capability</p>
            <h1 className="page-title">{service.title}</h1>
            <p className="page-intro">{service.description}</p>
          </div>
        </div>
      </header>

      <section className="section-block">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <img
              src={service.image}
              alt={`${service.title} service`}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="section-title">Service scope</h2>
            <p className="section-copy">{service.longDescription}</p>

            <div className="mt-9 border-t border-gray-200 pt-7">
              <h3 className="text-lg font-bold text-navy">Key benefits</h3>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-gold-700" aria-hidden="true" />
                    <span className="leading-6 text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-14 md:py-20">
        <div className="site-container">
          <p className="eyebrow">Scope details</p>
          <h2 className="section-title">What's included</h2>
          <div className="mt-8 grid border-l border-t border-gray-200 bg-white md:grid-cols-2">
            {service.features.map((feature) => (
              <div key={feature} className="flex min-h-20 items-start gap-3 border-b border-r border-gray-200 p-5">
                <Check className="mt-0.5 h-5 w-5 flex-none text-gold-700" aria-hidden="true" />
                <span className="leading-6 text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container flex flex-col justify-between gap-8 border-l-4 border-gold bg-navy px-6 py-9 text-white md:flex-row md:items-center md:px-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">Discuss this service</h2>
            <p className="mt-3 leading-7 text-gray-300">
              Contact SunLife to review project requirements for {service.title.toLowerCase()}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="btn-accent"
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Contact SunLife
            </Link>
            <a
              href="tel:+17544322302"
              className="btn border border-white/40 text-white hover:bg-white hover:text-navy"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call SunLife
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
