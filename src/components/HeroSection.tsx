import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, Clock, Users } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const HeroSection: React.FC = () => {
  const features = [
    { icon: Shield, text: 'Certified Experts' },
    { icon: CheckCircle, text: 'Guaranteed Quality' },
    { icon: Clock, text: '24/7 Support' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 pt-32 pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/3 w-full h-full bg-gradient-radial from-blue-200 to-transparent rounded-full opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/3 w-full h-full bg-gradient-radial from-blue-300 to-transparent rounded-full opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
              >
                Trusted Nationwide
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
              >
                Comprehensive <span className="text-blue-600">Facility Maintenance</span> Services
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-2xl leading-relaxed"
              >
                Expert solutions for asbestos, mold, and lead remediation. Comprehensive preventative maintenance and specialty facility services for government and enterprise clients.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors group"
                aria-label="Request a Service Quote"
              >
                <span>Request a Service Quote</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resources/capability-statement"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors group"
              >
                <span>Download Capability Statement</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-200 rounded-3xl opacity-30 blur-2xl -z-10" />
              <div className="relative aspect-video sm:aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Professional facility maintenance team"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              
              {/* Floating stats */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
                className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-white/90" />
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm font-medium text-white/80">Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
