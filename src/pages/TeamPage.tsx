import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    bio: 'Leading SunLife Housing Corp with over 15 years of experience in corporate housing and facility management.',
    fullBio: 'Sarah Johnson brings over 15 years of experience in the corporate housing and facility management industry. She founded SunLife Housing Corp with a vision to provide exceptional service and quality accommodations for business travelers and relocating employees. Under her leadership, the company has grown to serve multiple states and thousands of satisfied clients. Sarah holds an MBA from Stanford University and is a certified property management professional.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Michael Chen',
    role: 'Director of Operations',
    bio: 'Overseeing daily operations and ensuring the highest standards of service delivery across all locations.',
    fullBio: 'Michael Chen has been instrumental in scaling SunLife Housing Corp\'s operations across multiple markets. With a background in hospitality management and operations optimization, he ensures that every property meets our rigorous standards for quality and service. Michael holds a degree in Business Administration and has over 12 years of experience in the hospitality and property management sectors.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Jessica Martinez',
    role: 'Head of Customer Relations',
    bio: 'Dedicated to ensuring exceptional customer experiences and maintaining strong client relationships.',
    fullBio: 'Jessica Martinez leads our customer relations team with passion and dedication. She has developed comprehensive client service protocols that have resulted in industry-leading customer satisfaction scores. With over 10 years of experience in customer service and relationship management, Jessica ensures that every client receives personalized attention and support throughout their stay with us.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'David Thompson',
    role: 'Facility Management Director',
    bio: 'Managing comprehensive facility services and maintenance operations to ensure optimal property conditions.',
    fullBio: 'David Thompson oversees all facility management operations with expertise in building systems, maintenance protocols, and vendor management. His proactive approach to facility management has significantly reduced operational costs while improving property conditions. David is a certified facility manager with over 14 years of experience in commercial and residential property management.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Business Development Manager',
    bio: 'Expanding our market reach and developing strategic partnerships to grow our service offerings.',
    fullBio: 'Emily Rodriguez drives business growth through strategic partnerships and market expansion initiatives. She has successfully launched SunLife Housing Corp services in three new markets and established key partnerships with major corporations. Emily brings 8 years of experience in business development and strategic planning, with a focus on the real estate and hospitality industries.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Robert Kim',
    role: 'Financial Controller',
    bio: 'Managing financial operations and ensuring fiscal responsibility across all business units.',
    fullBio: 'Robert Kim manages all financial aspects of SunLife Housing Corp, from budgeting and forecasting to financial reporting and compliance. His analytical approach and attention to detail have helped optimize operational costs and improve profitability. Robert is a CPA with over 11 years of experience in corporate finance and accounting, specializing in the real estate and property management sectors.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const TeamPage: React.FC = () => {
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
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experienced team of professionals is dedicated to providing exceptional service 
            and ensuring your complete satisfaction. Get to know the people behind SunLife Housing Corp.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gold/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our commitment to excellence 
            and customer service. Explore career opportunities with SunLife Housing Corp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@sunlifehousing.com"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="mailto:hr@sunlifehousing.com"
              className="inline-flex items-center px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TeamPage;