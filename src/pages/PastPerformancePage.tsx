import React from "react";
import { motion } from "framer-motion";

const PastPerformancePage: React.FC = () => {
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
            Past Performance
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real projects only; sensitive details redacted. Provide dates,
            agency/prime, location, scope, period of performance, and public
            contact if allowed.
          </p>
        </motion.div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy">
              Sample Entry (Placeholder)
            </h2>
            <p className="text-gray-600">Agency/Prime: TBD</p>
            <p className="text-gray-600">Location: TBD</p>
            <p className="text-gray-600">Scope: TBD</p>
            <p className="text-gray-600">POP: TBD</p>
            <p className="text-gray-600">Public Contact: TBD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastPerformancePage;
