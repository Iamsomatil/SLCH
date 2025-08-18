import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Phone, Mail } from 'lucide-react';

const serviceDetails = {
  'corporate-housing': {
    title: 'Corporate Housing',
    description: 'Premium furnished accommodations designed for business travelers, relocating employees, and extended stay needs.',
    longDescription: 'Our corporate housing solutions provide fully furnished, move-in ready accommodations that feel like home. Whether you need temporary housing for business travel, employee relocation, or project-based work, we offer flexible lease terms and premium amenities to ensure comfort and productivity.',
    features: [
      'Fully furnished apartments and homes',
      'Flexible lease terms (30 days to 12+ months)',
      'Premium locations in major business districts',
      'High-speed internet and cable TV',
      'Weekly housekeeping services',
      'Fully equipped kitchens',
      'Fitness center and pool access',
      '24/7 guest services and support',
      'Pet-friendly options available',
      'Parking included'
    ],
    benefits: [
      'Cost-effective alternative to hotels',
      'Home-like comfort and privacy',
      'Professional environment for business travelers',
      'Streamlined booking and billing process'
    ],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'facility-management': {
    title: 'Facility Management',
    description: 'Comprehensive facility management services to maintain and optimize your property investments.',
    longDescription: 'Our facility management team provides end-to-end solutions to keep your properties operating at peak efficiency. From preventive maintenance to emergency repairs, we ensure your facilities are well-maintained, compliant, and cost-effective.',
    features: [
      '24/7 emergency maintenance response',
      'Preventive maintenance programs',
      'HVAC system management',
      'Electrical and plumbing services',
      'Landscaping and grounds keeping',
      'Security system monitoring',
      'Cleaning and janitorial services',
      'Vendor management and coordination',
      'Compliance and safety inspections',
      'Energy efficiency optimization'
    ],
    benefits: [
      'Reduced operational costs',
      'Extended asset lifespan',
      'Improved tenant satisfaction',
      'Regulatory compliance assurance'
    ],
    image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'property-management': {
    title: 'Property Management',
    description: 'Professional property management services for residential and commercial properties.',
    longDescription: 'Our property management services are designed to maximize your investment returns while minimizing your involvement in day-to-day operations. We handle everything from tenant screening to maintenance coordination.',
    features: [
      'Tenant screening and selection',
      'Rent collection and financial reporting',
      'Property maintenance coordination',
      'Lease administration and renewals',
      'Marketing and advertising vacant units',
      'Regular property inspections',
      'Handling tenant complaints and issues',
      'Legal compliance and documentation',
      'Emergency response coordination',
      'Market analysis and rent optimization'
    ],
    benefits: [
      'Maximized rental income',
      'Reduced vacancy rates',
      'Professional tenant relations',
      'Comprehensive financial reporting'
    ],
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'consulting-services': {
    title: 'Consulting Services',
    description: 'Expert real estate consulting for investment strategy, market analysis, and portfolio optimization.',
    longDescription: 'Our consulting team brings decades of real estate expertise to help you make informed decisions about your property investments. We provide strategic guidance, market insights, and optimization recommendations.',
    features: [
      'Market analysis and research',
      'Investment strategy development',
      'Portfolio optimization recommendations',
      'Risk assessment and mitigation',
      'Due diligence services',
      'Property valuation analysis',
      'Development feasibility studies',
      'Asset management strategies',
      'Exit strategy planning',
      'Regulatory compliance guidance'
    ],
    benefits: [
      'Informed investment decisions',
      'Risk mitigation strategies',
      'Optimized portfolio performance',
      'Expert market insights'
    ],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'relocation-services': {
    title: 'Relocation Services',
    description: 'Complete relocation assistance for employees and families moving to new cities.',
    longDescription: 'Our relocation services make moving to a new city stress-free and efficient. We provide comprehensive support throughout the entire relocation process, ensuring a smooth transition for employees and their families.',
    features: [
      'Home finding and area tours',
      'School search assistance',
      'Neighborhood orientation programs',
      'Moving coordination and logistics',
      'Temporary housing arrangements',
      'Utility setup assistance',
      'Cultural integration support',
      'Spousal job search assistance',
      'Tax and legal guidance',
      'Ongoing support services'
    ],
    benefits: [
      'Reduced relocation stress',
      'Faster employee productivity',
      'Improved employee retention',
      'Cost-effective relocation programs'
    ],
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'maintenance-services': {
    title: 'Maintenance Services',
    description: 'Professional maintenance and repair services for residential and commercial properties.',
    longDescription: 'Our maintenance team provides reliable, professional repair and maintenance services to keep your properties in excellent condition. From routine maintenance to emergency repairs, we ensure your properties are well-maintained.',
    features: [
      'HVAC repair and maintenance',
      'Plumbing and electrical services',
      'Appliance repair and replacement',
      'Painting and cosmetic improvements',
      'Flooring installation and repair',
      'Roofing and exterior maintenance',
      'Emergency repair services',
      'Preventive maintenance schedules',
      'Quality assurance inspections',
      'Warranty on all work performed'
    ],
    benefits: [
      'Extended property lifespan',
      'Reduced emergency repair costs',
      'Improved property value',
      'Reliable service guarantee'
    ],
    image: 'https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
};

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Service Not Found</h1>
          <Link to="/services" className="text-gold hover:text-gold/80">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/services"
            className="inline-flex items-center text-gold hover:text-gold/80 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {service.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-2xl font-bold text-navy">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              {service.longDescription}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-navy">Key Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-navy rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our {service.title.toLowerCase()} services 
            and how we can help meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Get a Quote
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServiceDetailPage;