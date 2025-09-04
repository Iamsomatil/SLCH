import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type PartnerLogo = {
  src: string;
  alt: string;
};

// Generate partner data from the filenames
const generatePartnerData = (): PartnerLogo[] => {
  const partnerFiles = [
    "AAI.jpg",
    "Asbestos.jpg",
    "Atlas.jpg",
    "Cleanco.jpg",
    "Ea.jpg",
    "East.jpg",
    "Elite.jpg",
    "Hogan.jpg",
    "Iea.jpg",
    "Les.jpg",
    "Matrix.jpg",
    "Mountain.jpg",
    "Otis.jpg",
    "Rhem.jpg",
    "Rhino.jpg",
    "Sdp.jpg",
    "Shelly.jpg"
  ];

  return partnerFiles.map(file => {
    // Generate a more descriptive alt text from the filename
    const name = file.split('.')[0];
    const alt = name === 'Ea' || name === 'Iea' ? name.toUpperCase() : name;
    
    return {
      src: `/partner/${file}`,
      alt: `${alt} logo`,
    };
  });
};

const DepartmentSeals: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [partners] = useState<PartnerLogo[]>(generatePartnerData());

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-12 md:py-16 bg-white"
      aria-label="Partner companies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Our Valued Partners
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders to deliver exceptional service and support.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={isReducedMotion ? {} : container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.src}
              variants={isReducedMotion ? {} : item}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={isReducedMotion ? {} : { y: -4, scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-full h-16">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full h-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                  style={{
                    filter: 'grayscale(100%)',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.opacity = '0.8';
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentSeals;
