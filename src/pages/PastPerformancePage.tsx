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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-navy text-center mb-8">
            Our Partnerships & Collaborations
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-navy">
              Sample Partnership (Example)
            </h3>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Agency/Prime:</span> Partner Company Name
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> Various Locations
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Scope:</span> Comprehensive facility maintenance and support services
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Period of Performance:</span> Ongoing
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Contact:</span> info@sunlifecorp.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PastPerformancePage;
