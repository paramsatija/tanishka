'use client';

import React from 'react';
import { Hero } from '@/components/shared/Hero';
import { BentoCard } from '@/components/shared/BentoCard';
import { Shield, FileCheck, Award, CheckCircle } from 'lucide-react';

export default function QualityPage() {
  return (
    <div>
      <Hero
        title="Quality Assurance"
        subtitle="Every shipment tested, certified, and documented."
        backgroundImage="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="container-width py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-4">Our Quality Process</h2>
          <p className="text-muted-text text-lg">
            Rigorous QA testing, batch COA documentation, and certified datasheets ensure consistent quality for every order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'ISO Certified', description: 'Meeting international standards' },
            { icon: FileCheck, title: 'COA Documentation', description: 'Certificate of Analysis for every batch' },
            { icon: Award, title: 'Quality Testing', description: 'In-house lab verification' },
            { icon: CheckCircle, title: 'Compliance', description: 'Regulatory and safety compliance' },
          ].map((item, index) => (
            <BentoCard key={index} className="text-center">
              <item.icon className="w-12 h-12 text-prime-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-text text-sm">{item.description}</p>
            </BentoCard>
          ))}
        </div>
      </section>
    </div>
  );
}
