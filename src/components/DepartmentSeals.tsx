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
    "asphalt.jpeg",
    "Atlas.jpg",
    "Cleanco.jpg",
    "action-business-furniture.png",
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
    "Shelly.jpg",
    "shetler-construction.png",
    "spirco-manufacturing.png",
    "lee-and-associates.png",
    "western-site-service.jpeg",
    "roofing-construction-llc.jpeg",
    "white-construction-co.jpeg",
    "doctor-asphalt.jpeg",
    "southeast-awnings.jpeg",
    "special-forces.jpeg",
  ];

  const partnerNameOverrides: Record<string, string> = {
    "western-site-service.jpeg": "Western Site Service",
    "roofing-construction-llc.jpeg": "Roofing Construction LLC",
    "white-construction-co.jpeg": "White Construction Co",
    "doctor-asphalt.jpeg": "Doctor Asphalt",
    "southeast-awnings.jpeg": "Southeast Awnings",
    "action-business-furniture.png": "Action Business Furniture Inc.",
    "lee-and-associates.png": "Lee & Associates",
    "shetler-construction.png": "Shetler Construction LLC",
    "spirco-manufacturing.png": "Spirco Manufacturing",
  };

  // Additional partner logos added from public/partner starting with "Screenshot"
  const screenshotFiles = [
    "Screenshot 2025-10-14 105.png.jpg",
    "Screenshot 2025-10-14 105918.png",
    "Screenshot 2025-10-14 110242.png",
    "Screenshot 2025-10-14 110333.png",
    "Screenshot 2025-10-14 110424.png",
    "Screenshot 2025-10-14 110946.png",
    "Screenshot 2025-10-14 111059.png",
    "Screenshot 2025-10-14 111133.png",
    "Screenshot 2025-10-14 111252.png",
    "Screenshot 2025-10-14 111344.png",
    "Screenshot 2025-10-14 111425.png",
    "Screenshot 2025-10-14 111442.png",
    "Screenshot 2025-10-14 111546.png",
    "Screenshot 2025-10-14 111629.png",
  ];

  const allFiles = [...partnerFiles, ...screenshotFiles];

  return allFiles.map(file => {
    // Generate a more descriptive alt text from the filename
    const name = file.split('.')[0];
    const alt = partnerNameOverrides[file] || (name === 'Ea' || name === 'Iea' ? name.toUpperCase() : name);
    
    return {
      src: `/partner/${file}`,
      alt: `${alt} logo`,
    };
  });
};

type DepartmentSealsProps = {
  showHeading?: boolean;
};

const DepartmentSeals: React.FC<DepartmentSealsProps> = ({ showHeading = true }) => {
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
    <section aria-label="Partner companies">
      <div>
        {showHeading && (
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Current relationships</p>
            <h2 className="section-title">Partner network</h2>
          </div>
        )}

        <motion.div
          ref={ref}
          variants={isReducedMotion ? {} : container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.src}
              variants={isReducedMotion ? {} : item}
              className="flex min-h-28 items-center justify-center bg-white p-5 transition-colors duration-200 hover:bg-gray-50"
              whileHover={isReducedMotion ? {} : { y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-14 w-full">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full h-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                  style={{
                    filter: 'grayscale(100%)',
                    opacity: 0.75,
                    transition: 'filter 0.2s ease, opacity 0.2s ease',
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
