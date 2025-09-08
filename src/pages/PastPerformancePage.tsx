import React from "react";
import { motion } from "framer-motion";
import DepartmentSeals from "../components/DepartmentSeals";

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
            Our Valued Partners
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to collaborate with industry-leading partners to deliver exceptional service and results for our clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <DepartmentSeals />
        </motion.div>
      </div>
    </div>
  );
};

export default PastPerformancePage;
