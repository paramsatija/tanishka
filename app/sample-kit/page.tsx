'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, Package } from 'lucide-react';
import { toast } from 'sonner';
import { fadeInUp } from '@/lib/animations';
import products from '@/data/products.json';

const sampleKitSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number required'),
  product_sku: z.string().min(1, 'Please select a product'),
  quantity: z.string().min(1, 'Quantity required (minimum 5 kg)'),
  shipping_address: z.string().min(10, 'Complete address required'),
  message: z.string().optional().default(''),
});

type SampleKitFormData = z.infer<typeof sampleKitSchema>;

export default function SampleKitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<SampleKitFormData>({
    resolver: zodResolver(sampleKitSchema),
  });

  const onSubmit = async (data: SampleKitFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/sample-kit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      toast.success('Sample kit request submitted! We\'ll contact you shortly.');
      reset();
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-olive to-steel-grey text-white py-20">
        <div className="container-width max-w-3xl text-center">
          <Package className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-white mb-6">Order Sample Kit</h1>
          <p className="text-white/90 text-xl">
            Sample quantities starting from 5 kg. Test material quality before placing larger orders.
          </p>
        </div>
      </section>

      <section className="container-width py-20">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input {...register('name')} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company *</label>
              <input {...register('company')} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all" />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input {...register('email')} type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone *</label>
              <input {...register('phone')} type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all" />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Product *</label>
              <select {...register('product_sku')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all">
                <option value="">Select product</option>
                {products.map((p) => (
                  <option key={p.sku} value={p.sku}>{p.name}</option>
                ))}
              </select>
              {errors.product_sku && <p className="text-red-500 text-sm mt-1">{errors.product_sku.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Quantity (min 5 kg) *</label>
              <input {...register('quantity')} type="text" placeholder="e.g., 10 kg" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all" />
              {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Shipping Address *</label>
            <textarea {...register('shipping_address')} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all resize-none" />
            {errors.shipping_address && <p className="text-red-500 text-sm mt-1">{errors.shipping_address.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Additional Notes</label>
            <textarea {...register('message')} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all resize-none" />
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full cta-primary flex items-center justify-center gap-2 disabled:opacity-50">
            {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" />Submitting...</> : 'Submit Sample Request'}
          </button>
        </motion.form>
      </section>
    </div>
  );
}
