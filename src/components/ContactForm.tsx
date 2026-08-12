import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  notes: string;
  _hp?: string; // honeypot
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const [submitting, setSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setResultMessage(null);
    setErrorMessage(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) {
        throw new Error(json.error || 'Failed to send message');
      }
      setResultMessage('Thank you! Your message has been sent. We will get back to you soon.');
      reset();
    } catch (err: unknown) {
      let message = 'Sorry, something went wrong. Please try again later.';
      if (typeof err === 'object' && err !== null && 'message' in err) {
        const e = err as { message?: string };
        if (e.message) message = e.message;
      }
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 border border-gray-300 bg-white p-6 md:p-8"
    >
      <div className="space-y-6">
        {/* Honeypot (hidden) */}
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register('_hp')} />
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="accent-small mb-2 block text-sm font-semibold">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            {...register('name', { required: 'Name is required' })}
            className="min-h-12 w-full rounded-md border border-gray-300 px-4 py-3 transition-colors focus:border-navy focus:ring-gold"
            placeholder="Your full name"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="accent-small mb-2 block text-sm font-semibold">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
            className="min-h-12 w-full rounded-md border border-gray-300 px-4 py-3 transition-colors focus:border-navy focus:ring-gold"
            placeholder="your.email@example.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="accent-small mb-2 block text-sm font-semibold">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            inputMode="tel"
            id="phone"
            autoComplete="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[\d\s\-()]+$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className="min-h-12 w-full rounded-md border border-gray-300 px-4 py-3 transition-colors focus:border-navy focus:ring-gold"
            placeholder="(123) 456-7890"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-required="true"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">{errors.phone.message}</p>
          )}
        </div>

        {/* Notes Field */}
        <div>
          <label htmlFor="notes" className="accent-small mb-2 block text-sm font-semibold">
            Notes
          </label>
          <textarea
            id="notes"
            rows={4}
            {...register('notes')}
            className="w-full rounded-md border border-gray-300 px-4 py-3 transition-colors focus:border-navy focus:ring-gold"
            placeholder="How can we help you?"
          />
        </div>
      </div>

      {/* Feedback messages */}
      {resultMessage && (
        <p className="text-green-700" role="status">{resultMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-600" role="alert">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full gap-2 sm:w-auto"
      >
        <span>{submitting ? 'Sending…' : 'Send Message'}</span>
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
};

export default ContactForm;
