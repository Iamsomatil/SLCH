import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import TrustBand from "../components/TrustBand";
import SectionDividerChevron from "../components/SectionDividerChevron";
import ServiceCard from "../components/ServiceCard";
import StatsCounter from "../components/StatsCounter";
import DepartmentBadges from "../components/DepartmentBadges";
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

const PromoVideoSection: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let attached = false;
    const attachSources = () => {
      if (attached) return;
      const sWebm = document.createElement("source");
      sWebm.src = "/videos/mission-720.webm";
      sWebm.type = "video/webm";
      const sMp4 = document.createElement("source");
      sMp4.src = "/videos/mission-720.mp4";
      sMp4.type = "video/mp4";
      v.appendChild(sWebm);
      v.appendChild(sMp4);
      attached = true;
      try {
        v.load();
      } catch (e) {}
    };

    if (!("IntersectionObserver" in window)) {
      attachSources();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            attachSources();
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" }
    );

    io.observe(v);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section id="promo-video" aria-label="Company overview video" className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">See SunLife Corporate Housing in Action</h2>
          <p className="mt-2 text-gray-600">A quick 20-second overview of what we do and how we serve our clients.</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <video
            id="slch-promo-video"
            ref={videoRef}
            className="block w-full h-auto"
            playsInline
            muted
            loop
            autoPlay
            controls
            preload="metadata"
            poster="/videos/mission-poster.PNG"
          >
            Sorry, your browser doesn't support embedded videos. You can
            <a href="/videos/mission-720.mp4">download the video here</a>.
          </video>
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <PromoVideoSection />
      <TrustBand items={[]} />
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

          <div className="max-w-4xl mx-auto flex justify-center">
            <ul className="inline-block list-disc pl-6 space-y-2 text-navy text-left">
              <li>Asbestos, mold, and lead remediation</li>
              <li>Preventative maintenance services</li>
              <li>Pavement maintenance and services</li>
              <li>Elevator maintenance and services</li>
              <li>Facility support and specialty services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Government Departments Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">
              Trusted By Government Agencies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve various government departments with our
              comprehensive facility maintenance solutions.
            </p>
          </motion.div>
          <DepartmentBadges />
        </div>
      </section>

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
