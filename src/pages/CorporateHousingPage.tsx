import React from "react";
import { motion } from "framer-motion";

const CorporateHousingPage: React.FC = () => {
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
            Corporate Housing for Government
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized corporate housing tailored for government assignments,
            training programs, and operational deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-4">Benefits</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Fully equipped units with utilities included</li>
              <li>• Short and long-term options</li>
              <li>• Easy procurement process</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Per-Diem Aligned
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Transparent pricing structured for per-diem</li>
              <li>• Flexible extensions based on mission needs</li>
              <li>• Documentation ready for CO/COR review</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Rapid Deployment
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Placement within 24–72 hours in most markets</li>
              <li>• Nationwide reach near key installations</li>
              <li>• Dedicated coordination support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateHousingPage;
