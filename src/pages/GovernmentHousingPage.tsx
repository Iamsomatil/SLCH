import React from "react";
import { motion } from "framer-motion";

const GovernmentHousingPage: React.FC = () => {
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
            Government Housing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Turnkey furnished accommodations for federal, state, and local
            agencies, DoD units, and government contractors. Per-diem aligned,
            compliant, and rapidly deployable near bases, installations, and
            government facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Turnkey Government Housing
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Furnished units</li>
              <li>• Utilities + Wi‑Fi</li>
              <li>• Optional housekeeping</li>
              <li>• Secure access</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Procurement-Friendly
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• W‑9 on file</li>
              <li>• Net 30+ terms (if approved)</li>
              <li>• PO & invoicing support</li>
              <li>• CO/COR coordination</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Risk & Compliance
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Backgrounded vendors</li>
              <li>• Data privacy practices</li>
              <li>• Insurance certificates available</li>
              <li>• Privacy-respectful resident handling</li>
            </ul>
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gold/10 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-navy mb-4">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-navy">
            <div className="bg-white rounded-xl p-4 shadow-soft">
              TDY/PCS and training assignments
            </div>
            <div className="bg-white rounded-xl p-4 shadow-soft">
              Emergency & disaster response
            </div>
            <div className="bg-white rounded-xl p-4 shadow-soft">
              Program rollouts and field operations
            </div>
            <div className="bg-white rounded-xl p-4 shadow-soft">
              Contractor mobilization near facilities
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GovernmentHousingPage;
