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
    <section className="relative overflow-hidden bg-white pt-32 pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/3 w-full h-full bg-gradient-radial from-gold/10 to-transparent rounded-full opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/3 w-full h-full bg-gradient-radial from-gold/10 to-transparent rounded-full opacity-20" />
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
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy/5 text-navy text-sm font-medium border border-navy/10"
              >
                Trusted Nationwide
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
              >
                Comprehensive <span className="text-gold">Facility Maintenance</span> Services
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 max-w-2xl leading-relaxed"
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
                className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy rounded-full font-medium hover:bg-gold/90 transition-colors group"
                aria-label="Request a Service Quote"
              >
                <span>Request a Service Quote</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <feature.icon className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium text-gray-800">{feature.text}</span>
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
              <div className="absolute -inset-4 bg-gold/20 rounded-3xl opacity-30 blur-2xl -z-10" />
              <div className="relative aspect-video sm:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/70" />
                <img
                  src="/hero-img.jpeg"
                  alt="Professional facility maintenance team performing building inspection and maintenance"
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
                className="absolute -bottom-6 -right-6 bg-gold text-navy p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-navy/90" />
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm font-medium text-navy/80">Support</div>
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
