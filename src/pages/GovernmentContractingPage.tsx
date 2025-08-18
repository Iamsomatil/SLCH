import React from "react";
import { motion } from "framer-motion";

const GovernmentContractingPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Government Contracting Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sunlife Corporate Housing LLC specializes in delivering compliant,
            efficient, and mission-ready housing solutions for agencies and
            contractors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">
              Turnkey Housing
            </h2>
            <p className="text-gray-700">
              Furnished units with utilities and Wi‑Fi included.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">Proximity</h2>
            <p className="text-gray-700">
              Near bases, installations, and federal campuses.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">Flexible Terms</h2>
            <p className="text-gray-700">
              Aligned with TDY, PCS, training, and deployment timelines.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">
              Secure & Private
            </h2>
            <p className="text-gray-700">
              Privacy-respectful operations and vetted partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentContractingPage;
