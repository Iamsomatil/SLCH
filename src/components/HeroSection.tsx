import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-navy leading-tight">
                Comprehensive Facility Maintenance Services
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Asbestos, mold, and lead remediation. Preventative maintenance.
                Pavement, elevator, and specialty facility services for
                government and enterprise clients.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-200 group"
                aria-label="Request a Service Quote"
              >
                Request a Service Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resources/capability-statement"
                className="inline-flex items-center px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors duration-200"
              >
                Download Capability Statement
              </Link>
            </div>

            {/* Stats removed per request */}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern Corporate Housing"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating elements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
            >
              <div className="text-2xl font-bold text-gold">24/7</div>
              <div className="text-sm text-navy">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
