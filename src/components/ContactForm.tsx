import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Message is required' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your housing or facility management needs..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gold text-white font-semibold py-3 px-6 rounded-lg hover:bg-gold/90 transition-colors flex items-center justify-center space-x-2"
      >
        <span>Send Message</span>
        <Send className="h-5 w-5" />
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;