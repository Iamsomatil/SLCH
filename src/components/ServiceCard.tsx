import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, slug, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
            <Icon className="h-6 w-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {features && (
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-center">
                <div className="w-1 h-1 bg-gold rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center text-gold font-semibold hover:text-gold/80 transition-colors group"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 group-hover:transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;