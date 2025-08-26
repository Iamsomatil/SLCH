import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { Shield, Wrench, MapPin, Cog, Clock, Users } from "lucide-react";

const services = [
  {
    title: "Asbestos, Mold, and Lead Remediation",
    description:
      "Certified remediation to create safer environments. Advanced techniques to detect, eliminate, and prevent hazardous materials.",
    icon: Shield,
    slug: "remediation",
    features: [
      "Asbestos abatement",
      "Mold remediation",
      "Lead-safe practices",
      "Regulatory compliance",
    ],
  },
  {
    title: "Preventative Maintenance Services",
    description:
      "Planned maintenance programs to minimize downtime and extend asset life.",
    icon: Wrench,
    slug: "preventative-maintenance",
    features: [
      "Scheduled inspections",
      "Predictive upkeep",
      "Work order management",
      "24/7 response",
    ],
  },
  {
    title: "Pavement Maintenance and Services",
    description:
      "Repair and maintain roads, lots, and walkways for safety and longevity.",
    icon: MapPin,
    slug: "pavement-services",
    features: [
      "Crack sealing",
      "Sealcoating",
      "Striping & marking",
      "ADA compliance",
    ],
  },
  {
    title: "Elevator Maintenance and Services",
    description:
      "Reliable elevator upkeep and modernization for safe, efficient transport.",
    icon: Cog,
    slug: "elevator-services",
    features: [
      "Routine maintenance",
      "Repairs",
      "Modernization",
      "Compliance checks",
    ],
  },
  {
    title: "Facility Support and Specialty Services",
    description:
      "Special projects and support operations tailored to mission needs.",
    icon: Wrench,
    slug: "facility-support",
    features: [
      "Specialty cleaning",
      "Minor renovations",
      "Event/mission support",
      "Vendor coordination",
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sunlife provides facility maintenance and specialty services
            designed to meet the highest standards of compliance and operational
            excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Government Contracting Sections */}
        <section className="space-y-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-2">
              Delivery Driver
            </h2>
            <p className="text-gray-600">
              Reliable, secure, and timely delivery for government contracts and
              mission-critical logistics.
            </p>
          </div>
          {/* Laboratory category removed per request */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-2">
              Renovation & Construction
            </h2>
            <p className="text-gray-600">
              Regulation-compliant facility upgrades and construction tailored
              to government and private sector needs.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-2">
              Air Quality & Mold Remediation
            </h2>
            <p className="text-gray-600">
              Certified remediation ensuring safe, healthy environments for
              workers and residents.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-2">
              Facility Maintenance & Management
            </h2>
            <p className="text-gray-600">
              Preventive maintenance, inspections, and full-service facility
              management solutions.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose SunLife Housing Corp?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand out in the industry with our commitment to excellence and
              customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mx-auto mb-4">
                <Shield className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                Premium standards and rigorous quality control in all our
                services
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mx-auto mb-4">
                <Clock className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance and emergency response services
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals dedicated to delivering excellence
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mx-auto mb-4">
                <MapPin className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Wide Coverage
              </h3>
              <p className="text-gray-600">
                Comprehensive services across multiple states and major cities
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesPage;
