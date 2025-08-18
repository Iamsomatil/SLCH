import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  fullBio?: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, fullBio, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-1">{name}</h3>
        <p className="text-gold font-semibold mb-3">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
        
        {fullBio && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-gold font-semibold hover:text-gold/80 transition-colors text-sm"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              {isExpanded ? (
                <ChevronUp className="ml-1 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-1 h-4 w-4" />
              )}
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <p className="text-gray-600 text-sm">{fullBio}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;