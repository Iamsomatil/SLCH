import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import TrustBand from "../components/TrustBand";
import SectionDividerChevron from "../components/SectionDividerChevron";
import ServiceCard from "../components/ServiceCard";
import StatsCounter from "../components/StatsCounter";
import DepartmentSeals from "../components/DepartmentSeals";
import { Shield, Wrench, MapPin, Cog, Clock } from "lucide-react";

const services = [
  {
    title: "Asbestos, Mold, and Lead Remediation",
    description:
      "Certified remediation to create safer environments and ensure regulatory compliance.",
    icon: Shield,
    slug: "remediation",
    features: ["Asbestos abatement", "Mold remediation", "Lead-safe practices"],
  },
  {
    title: "Preventative Maintenance Services",
    description: "Planned programs to minimize downtime and extend asset life.",
    icon: Wrench,
    slug: "preventative-maintenance",
    features: ["Scheduled inspections", "Predictive upkeep", "24/7 response"],
  },
  {
    title: "Pavement Maintenance and Services",
    description:
      "Repair and maintain roads, lots, and walkways for safety and longevity.",
    icon: MapPin,
    slug: "pavement-services",
    features: ["Crack sealing", "Sealcoating", "Striping & ADA"],
  },
  {
    title: "Elevator Maintenance and Services",
    description:
      "Reliable elevator upkeep and modernization for safe, efficient transport.",
    icon: Cog,
    slug: "elevator-services",
    features: ["Routine maintenance", "Repairs", "Modernization"],
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustBand
        items={[
          "Per-Diem Compliant",
          "SAM Registered: TBD",
          "UEI: TBD",
          "CAGE: TBD",
        ]}
      />
      <SectionDividerChevron />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Facility Maintenance Services You Can Trust
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sunlife provides a full range of facility services designed to
              meet the highest standards of compliance and operational
              excellence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ul className="list-disc pl-6 space-y-2 text-navy">
              <li>Asbestos, mold, and lead remediation</li>
              <li>Preventative maintenance services</li>
              <li>Pavement maintenance and services</li>
              <li>Elevator maintenance and services</li>
              <li>Facility support and specialty services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Department Seals Section */}
      <DepartmentSeals />

      {/* Stats Counter */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Government Contracting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sunlife Corporate Housing LLC provides a full range of government
              contracting services designed to meet the highest standards of
              compliance and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Reliable Facility Support
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We deliver compliant, secure, and reliable facility
                services—remediation, preventative maintenance, pavement and
                elevator services—tailored to mission needs and regulatory
                requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Request Service Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gold/10 rounded-lg p-6 text-center">
                <Shield className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="font-bold text-navy mb-2">Compliance-Ready</h3>
                <p className="text-sm text-gray-600">
                  W-9, invoicing, and documentation aligned with agency
                  requirements
                </p>
              </div>
              <div className="bg-gold/10 rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="font-bold text-navy mb-2">Rapid Response</h3>
                <p className="text-sm text-gray-600">
                  Service mobilization within 24–72 hours in most markets
                </p>
              </div>
              <div className="bg-gold/10 rounded-lg p-6 text-center">
                <Cog className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="font-bold text-navy mb-2">Expert Technicians</h3>
                <p className="text-sm text-gray-600">
                  Vetted specialists for remediation and maintenance
                </p>
              </div>
              <div className="bg-gold/10 rounded-lg p-6 text-center">
                <MapPin className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="font-bold text-navy mb-2">
                  Nationwide Coverage
                </h3>
                <p className="text-sm text-gray-600">
                  Proximity to bases, installations, and federal campuses
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
