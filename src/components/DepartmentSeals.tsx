import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type DepartmentSeal = {
  src: string;
  alt: string;
  title: string;
};

const departmentSeals: DepartmentSeal[] = [
  {
    src: '/army.avif',
    alt: 'Department of the Army Seal',
    title: 'U.S. Department of the Army'
  },
  {
    src: '/coast.avif',
    alt: 'United States Coast Guard Seal',
    title: 'U.S. Coast Guard'
  },
  {
    src: '/dod.avif',
    alt: 'Department of Defense Seal',
    title: 'U.S. Department of Defense'
  },
  {
    src: '/justice.avif',
    alt: 'Department of Justice Seal',
    title: 'U.S. Department of Justice'
  },
  {
    src: '/navy.avif',
    alt: 'Department of the Navy Seal',
    title: 'U.S. Department of the Navy'
  },
  {
    src: '/sam.avif',
    alt: 'System for Award Management Seal',
    title: 'System for Award Management (SAM)'
  }
];

const DepartmentSeals: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section 
      className="py-12 md:py-16 bg-gray-50"
      aria-labelledby="departments-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            id="departments-heading"
            className="text-2xl md:text-3xl font-bold text-navy"
          >
            Government Departments We've Worked With
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by federal agencies to deliver exceptional service and support.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={isReducedMotion ? {} : container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {departmentSeals.map((seal, index) => (
            <motion.div 
              key={seal.alt}
              variants={isReducedMotion ? {} : item}
              className="flex items-center justify-center p-4"
              whileHover={isReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
              whileTap={isReducedMotion ? {} : { scale: 0.98 }}
            >
              <div className="relative group w-full h-full flex items-center justify-center">
                <img
                  src={seal.src}
                  alt={seal.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  style={{
                    filter: 'contrast(1.1) brightness(1.05)',
                    maxWidth: '120px',
                    height: 'auto',
                    width: 'auto'
                  }}
                  title={seal.title}
                />
                <span className="sr-only">{seal.title}</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white to-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentSeals;
