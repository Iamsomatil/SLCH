import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Corporate Campus Housing Initiative',
    client: 'Fortune 500 Technology Company',
    location: 'Austin, Texas',
    duration: '18 months',
    description: 'Provided temporary housing for 200+ employees during a major office relocation and expansion project.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      '99% occupancy rate maintained',
      '95% employee satisfaction score',
      '$2.3M cost savings vs. hotel alternatives',
      'Zero safety incidents reported'
    ],
    services: ['Corporate Housing', 'Relocation Services', 'Facility Management']
  },
  {
    id: 2,
    title: 'Medical Center Facility Management',
    client: 'Regional Healthcare Network',
    location: 'Houston, Texas',
    duration: '5 years ongoing',
    description: 'Comprehensive facility management for a 500,000 sq ft medical complex including 24/7 maintenance support.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      '40% reduction in maintenance costs',
      '99.8% system uptime achieved',
      'LEED Gold certification maintained',
      '100% regulatory compliance record'
    ],
    services: ['Facility Management', 'Maintenance Services', 'Consulting Services']
  },
  {
    id: 3,
    title: 'Executive Housing Program',
    client: 'International Consulting Firm',
    location: 'New York City',
    duration: '3 years',
    description: 'Premium corporate housing solutions for visiting executives and long-term project teams.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      '150+ executives housed annually',
      '98% client retention rate',
      'Average 30-day booking lead time',
      '$1.8M annual program value'
    ],
    services: ['Corporate Housing', 'Consulting Services']
  },
  {
    id: 4,
    title: 'Multi-State Property Portfolio',
    client: 'Private Investment Group',
    location: 'Multiple States',
    duration: '7 years ongoing',
    description: 'Property management and optimization for a diverse portfolio of 50+ residential and commercial properties.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      '$15M+ portfolio value managed',
      '25% increase in rental income',
      '92% average occupancy rate',
      '15% reduction in operating expenses'
    ],
    services: ['Property Management', 'Consulting Services', 'Maintenance Services']
  },
  {
    id: 5,
    title: 'Manufacturing Plant Support Services',
    client: 'Global Manufacturing Corporation',
    location: 'Chicago, Illinois',
    duration: '2 years',
    description: 'Temporary housing and facility support during a major plant modernization project.',
    image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      '300+ workers accommodated',
      'Zero project delays due to housing',
      '$500K under budget delivery',
      '96% safety compliance rating'
    ],
    services: ['Corporate Housing', 'Facility Management', 'Relocation Services']
  },
  {
    id: 6,
    title: 'University Partnership Program',
    client: 'Major State University',
    location: 'Los Angeles, California',
    duration: '4 years ongoing',
    description: 'Visiting faculty and researcher housing program with flexible lease terms and academic year scheduling.',
    image: 'https://images.pexels.com/photos/159213/hall-of-justice-headquarters-building-architecture-159213.jpeg?auto=compress&cs=tinysrgb&w=600',
    results: [
      '100+ faculty members served',
      '6-month average stay duration',
      '94% renewal rate',
      'Custom academic calendar alignment'
    ],
    services: ['Corporate Housing', 'Property Management']
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Projects & Partnerships
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped organizations across various industries achieve their goals 
            through our comprehensive housing and facility management solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="aspect-square lg:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gold font-semibold mb-4">{project.client}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Services */}
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-navy rounded-2xl p-8 md:p-12 text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results for your organization. Contact us today 
            to discuss your corporate housing and facility management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              Start Your Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors"
            >
              Explore Our Services
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectsPage;