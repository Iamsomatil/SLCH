import React from "react";
import { motion } from "framer-motion";

const ContractVehiclesPage: React.FC = () => {
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
            Contract Vehicles
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The following vehicles are placeholders until confirmed. No claims
            are made here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">BPAs</h2>
            <p className="text-gray-600">TBD</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">IDIQs</h2>
            <p className="text-gray-600">TBD</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">
              Subcontractor Agreements
            </h2>
            <p className="text-gray-600">TBD</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-navy mb-2">
              State Cooperative Contracts
            </h2>
            <p className="text-gray-600">TBD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractVehiclesPage;
