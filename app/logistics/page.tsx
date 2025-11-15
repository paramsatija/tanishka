'use client';

import React from 'react';
import { Hero } from '@/components/shared/Hero';
import { StatCounter } from '@/components/shared/StatCounter';
import { BentoCard } from '@/components/shared/BentoCard';
import { Globe } from 'lucide-react';

export default function LogisticsPage() {
  const countries = [
    'Russia', 'South Korea', 'Germany', 'USA', 'Netherlands', 'Japan',
    'Vietnam', 'China', 'Iran', 'Saudi Arabia', 'Taiwan', 'UAE',
    'Malaysia', 'Thailand', 'Singapore', 'Indonesia'
  ];

  return (
    <div>
      <Hero
        title="Global Reach, Local Service"
        subtitle="15+ export countries, 3 stock points, 93% on-time delivery."
        backgroundImage="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="container-width py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <StatCounter end={3} label="Stock Points in India" />
          <StatCounter end={8} label="States Covered" />
          <StatCounter end={15} suffix="+" label="Export Countries" />
          <StatCounter end={93} suffix="%" label="On-Time Delivery" />
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Export Network</h2>
          <BentoCard>
            <Globe className="w-12 h-12 text-prime-blue mb-6" />
            <div className="flex flex-wrap gap-3">
              {countries.map((country, index) => (
                <span key={index} className="bg-gray-100 text-steel-grey px-4 py-2 rounded-full text-sm">
                  {country}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      </section>
    </div>
  );
}
