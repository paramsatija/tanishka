'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { fadeInUp } from '@/lib/animations';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  product_interest: z.string().min(1, 'Please select a product interest'),
  volume: z.string().min(1, 'Volume estimate is required'),
  message: z.string().optional().default(''),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');

      toast.success('Thank you! We\'ll respond within 24 hours.');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
            Company Name *
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all"
            placeholder="Acme Manufacturing"
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all"
            placeholder="john@acme.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all"
            placeholder="+91-9876543210"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="product_interest" className="block text-sm font-medium text-ink mb-2">
            Product Interest *
          </label>
          <select
            {...register('product_interest')}
            id="product_interest"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all"
          >
            <option value="">Select a product category</option>
            <option value="ABS">ABS</option>
            <option value="PC">PC (Polycarbonate)</option>
            <option value="PP">PP (Polypropylene)</option>
            <option value="HDPE">HDPE</option>
            <option value="Nylon">Nylon</option>
            <option value="POM">POM</option>
            <option value="Other">Other / Multiple Products</option>
          </select>
          {errors.product_interest && (
            <p className="text-red-500 text-sm mt-1">{errors.product_interest.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="volume" className="block text-sm font-medium text-ink mb-2">
            Estimated Volume *
          </label>
          <input
            {...register('volume')}
            type="text"
            id="volume"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all"
            placeholder="e.g., 1000 kg/month"
          />
          {errors.volume && <p className="text-red-500 text-sm mt-1">{errors.volume.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Message (Optional)
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full cta-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </button>

      <p className="text-sm text-steel-grey text-center">
        By submitting, you agree to be contacted regarding your inquiry. We typically respond within
        24 hours.
      </p>
    </motion.form>
  );
}
