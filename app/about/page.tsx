'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/shared/Hero';
import { BentoCard } from '@/components/shared/BentoCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Heart, Target, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const leadership = [
    { name: 'Vishesh Jain', role: 'Director', bio: 'Leading strategic growth and operations' },
    { name: 'Sanjiv Jain', role: 'Founder & Director', bio: 'Established Prime Polymart in 1960' },
    { name: 'Amit Daksh', role: 'Business Development Manager', bio: 'Driving market expansion' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest dealings and transparent communication in every transaction.',
    },
    {
      icon: Target,
      title: 'Diligence',
      description: 'Meticulous attention to detail in quality, service, and delivery.',
    },
    {
      icon: Users,
      title: 'Respect',
      description: 'Valuing partnerships and building long-term relationships.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous improvement in products, processes, and performance.',
    },
  ];

  return (
    <div>
      <Hero
        title="Serving Since 1960"
        subtitle="Six decades of excellence in thermoplastic distribution."
        backgroundImage="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="container-width py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-6">Our Story</h2>
            <p className="text-muted-text text-lg mb-6">
              Prime Polymart has served the plastics industry since 1960, distributing a complete
              line of thermoplastic resins and additives across North India and internationally —
              including Saudi Arabia, Thailand, Korea, Germany, and beyond.
            </p>
            <p className="text-muted-text text-lg mb-6">
              We combine deep technical support, competitive pricing, and reliable logistics to
              deliver exceptional value. With three strategic stock points covering eight states and
              direct import relationships spanning 12 countries, we ensure material availability and
              rapid delivery.
            </p>
            <p className="text-muted-text text-lg">
              Our in-house R&D team, state-of-the-art testing equipment, and commitment to quality
              assurance have made us a trusted partner for 450+ manufacturers and converters
              nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-width">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto">
              These principles guide every decision and interaction.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <BentoCard className="text-center h-full">
                  <value.icon className="w-12 h-12 text-prime-blue mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-text text-sm">{value.description}</p>
                </BentoCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container-width py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Leadership Team</h2>
          <p className="text-muted-text text-lg max-w-2xl mx-auto">
            Experienced professionals driving innovation and growth.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {leadership.map((leader, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <BentoCard className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-prime-blue to-steel-grey rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <div className="text-steel-grey mb-3">{leader.role}</div>
                <p className="text-muted-text text-sm">{leader.bio}</p>
              </BentoCard>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
