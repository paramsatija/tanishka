'use client';

import React from 'react';
import { Hero } from '@/components/shared/Hero';
import { BentoCard } from '@/components/shared/BentoCard';
import { Microscope, Truck, DollarSign, TestTube } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Microscope,
      title: 'Technical Support & R&D',
      description: 'In-house R&D team with state-of-the-art equipment. Sample quantities starting from 5 kg available for testing and development.',
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'Over 90% of deliveries dispatched and delivered the next business day. Strategic inventory planning and stocking solutions.',
    },
    {
      icon: DollarSign,
      title: 'Financing & Trade Terms',
      description: 'Flexible payment options, volume discounts, and supplier financing relationships for your convenience.',
    },
    {
      icon: TestTube,
      title: 'Custom Compound Development',
      description: 'Tailor-made grades and masterbatches. Color matching and flame-retardant formulations to meet your specifications.',
    },
  ];

  return (
    <div>
      <Hero
        title="Comprehensive Services"
        subtitle="Supporting your success from sourcing to delivery."
        backgroundImage="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="container-width py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <BentoCard key={index} hover>
              <service.icon className="w-12 h-12 text-prime-blue mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-text">{service.description}</p>
            </BentoCard>
          ))}
        </div>
      </section>
    </div>
  );
}
