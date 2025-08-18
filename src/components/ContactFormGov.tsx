import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface GovQuoteFormData {
  agency: string;
  contractNumber?: string;
  requiredDates: string;
  cityOrInstallation: string;
  bedrooms: string;
  budgetOrPerDiem: string;
  pocName: string;
  email: string;
  phone: string;
  notes?: string;
}

const ContactFormGov: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GovQuoteFormData>();

  const onSubmit = (data: GovQuoteFormData) => {
    console.log('Gov quote submitted:', data);
    alert('Thanks. Your government housing quote request was received. We will respond shortly.');
    reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
      aria-labelledby="gov-quote-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="agency" className="block text-sm font-medium text-navy mb-2">
            Agency/Organization *
          </label>
          <input
            id="agency"
            type="text"
            {...register('agency', { required: 'Agency/Organization is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            aria-invalid={!!errors.agency}
          />
          {errors.agency && <p className="mt-1 text-sm text-red-600">{errors.agency.message}</p>}
        </div>

        <div>
          <label htmlFor="requiredDates" className="block text-sm font-medium text-navy mb-2">
            Required Dates *
          </label>
          <input
            id="requiredDates"
            type="text"
            placeholder="e.g., 2025-10-01 to 2026-01-15"
            {...register('requiredDates', { required: 'Required dates are needed' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            aria-invalid={!!errors.requiredDates}
          />
          {errors.requiredDates && <p className="mt-1 text-sm text-red-600">{errors.requiredDates.message}</p>}
        </div>

        <div>
          <label htmlFor="cityOrInstallation" className="block text-sm font-medium text-navy mb-2">
            City/Installation *
          </label>
          <input
            id="cityOrInstallation"
            type="text"
            placeholder="e.g., San Antonio, Lackland AFB"
            {...register('cityOrInstallation', { required: 'City or installation is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            aria-invalid={!!errors.cityOrInstallation}
          />
          {errors.cityOrInstallation && <p className="mt-1 text-sm text-red-600">{errors.cityOrInstallation.message}</p>}
        </div>

        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium text-navy mb-2">
            Bedrooms *
          </label>
          <select
            id="bedrooms"
            {...register('bedrooms', { required: 'Please select bedrooms' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            aria-invalid={!!errors.bedrooms}
          >
            <option value="">Select...</option>
            <option value="Studio">Studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
          {errors.bedrooms && <p className="mt-1 text-sm text-red-600">{errors.bedrooms.message}</p>}
        </div>

        <div>
          <label htmlFor="budgetOrPerDiem" className="block text-sm font-medium text-navy mb-2">
            Budget/Per Diem *
          </label>
          <input
            id="budgetOrPerDiem"
            type="text"
            placeholder="e.g., GSA per diem or monthly budget"
            {...register('budgetOrPerDiem', { required: 'Please enter budget or per diem' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            aria-invalid={!!errors.budgetOrPerDiem}
          />
          {errors.budgetOrPerDiem && <p className="mt-1 text-sm text-red-600">{errors.budgetOrPerDiem.message}</p>}
        </div>

        <div>
          <label htmlFor="contractNumber" className="block text-sm font-medium text-navy mb-2">
            Contract # (optional)
          </label>
          <input
            id="contractNumber"
            type="text"
            {...register('contractNumber')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="pocName" className="block text-sm font-medium text-navy mb-2">
            POC Name *
          </label>
          <input
            id="pocName"
            type="text"
            {...register('pocName', { required: 'Point of contact name is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            aria-invalid={!!errors.pocName}
          />
          {errors.pocName && <p className="mt-1 text-sm text-red-600">{errors.pocName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-navy mb-2">
          Notes
        </label>
        <textarea
          id="notes"
          rows={4}
          {...register('notes')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none"
          placeholder="Mission context, special security or access considerations, parking, pet policy, etc."
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gold text-white font-semibold py-3 px-6 rounded-lg hover:bg-[color:var(--gold-hover,theme(colors.brand.orange-700))] transition-colors flex items-center justify-center space-x-2"
        aria-label="Submit government housing quote request"
      >
        <span>Request Government Housing Quote</span>
        <Send className="h-5 w-5" />
      </motion.button>
    </motion.form>
  );
};

export default ContactFormGov;

