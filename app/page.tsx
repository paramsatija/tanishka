'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/shared/Hero';
import { GlassCard } from '@/components/shared/GlassCard';
import { BentoCard } from '@/components/shared/BentoCard';
import { ProductCard } from '@/components/shared/ProductCard';
import { StatCounter } from '@/components/shared/StatCounter';
import {
  CheckCircle,
  Users,
  Globe,
  Shield,
  TrendingUp,
  Award,
  Zap,
  Target,
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import products from '@/data/products.json';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <Hero
        title="We Understand Plastics."
        subtitle="Serving manufacturers & converters since 1960 — global sourcing, local reliability."
        primaryCta={{ text: 'Explore Products', href: '/products' }}
        secondaryCta={{ text: 'Request Quote', href: '/contact' }}
        backgroundImage="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920"
        minHeight="700px"
      />

      <section className="container-width py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          <StatCounter end={450} suffix="+" label="Active Customers" />
          <StatCounter end={290} suffix="+" label="Product Grades" />
          <StatCounter end={12} label="Import Countries" />
          <StatCounter end={93} suffix="%" label="On-Time Delivery" />
        </motion.div>
      </section>

      <section className="container-width py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Why Choose Prime Polymart</h2>
          <p className="text-muted-text text-lg max-w-2xl mx-auto">
            Six decades of expertise delivering quality thermoplastic resins with integrity,
            diligence, and respect.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Globe,
              title: 'Global Sourcing',
              description:
                'Direct imports from 12+ countries including USA, Germany, Korea, and Japan ensuring premium quality materials.',
            },
            {
              icon: Zap,
              title: 'Fast Delivery',
              description:
                'Over 90% of orders dispatched and delivered the next business day with 3 strategic stock points.',
            },
            {
              icon: Shield,
              title: 'Quality Assurance',
              description:
                'Rigorous QA testing, batch COAs, and certified datasheets for every shipment.',
            },
            {
              icon: Users,
              title: 'Technical Support',
              description:
                'In-house R&D team with state-of-the-art equipment. Sample quantities from 5 kg available.',
            },
            {
              icon: TrendingUp,
              title: 'Custom Solutions',
              description:
                'Tailored compounds, color masterbatches, and flame-retardant formulations for your specific needs.',
            },
            {
              icon: Target,
              title: 'Competitive Pricing',
              description:
                'Volume discounts, flexible payment terms, and supplier financing relationships.',
            },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <BentoCard hover>
                <item.icon className="w-10 h-10 text-prime-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-text text-sm">{item.description}</p>
              </BentoCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container-width">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Featured Products</h2>
            <p className="text-muted-text text-lg max-w-2xl mx-auto">
              From engineering thermoplastics to commodity polymers — comprehensive solutions for
              every application.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {featuredProducts.map((product, index) => (
              <motion.div key={product.sku} variants={fadeInUp}>
                <ProductCard
                  sku={product.sku}
                  slug={product.slug}
                  name={product.name}
                  summary={product.summary}
                  image={product.image}
                  applications={product.applications}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <a href="/products" className="cta-secondary">
              View All Products
            </a>
          </div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-gold-400/20 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Since 1960
            </div>
            <h2 className="mb-6">Built on Integrity, Powered by Excellence</h2>
            <p className="text-muted-text text-lg mb-6">
              Prime Polymart has served the plastics industry for over six decades, distributing a
              complete line of thermoplastic resins and additives across North India and
              internationally to Saudi Arabia, Thailand, Korea, Germany, and beyond.
            </p>
            <p className="text-muted-text mb-8">
              We combine technical expertise, competitive pricing, and reliable logistics to deliver
              value at every touchpoint. Our core values guide everything we do: Integrity in our
              dealings, Diligence in our service, and Respect for our partners.
            </p>
            <a href="/about" className="cta-primary">
              Learn About Us
            </a>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Years of Experience', value: '60+' },
              { label: 'States Served', value: '8+' },
              { label: 'Export Countries', value: '15+' },
              { label: 'Customer Retention', value: '84%' },
            ].map((stat, index) => (
              <BentoCard key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-prime-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-steel-grey text-sm">{stat.label}</div>
              </BentoCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-prime-blue text-white py-20">
        <div className="container-width text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Request a quote, order samples starting from 5 kg, or speak with our technical team.
              Response time typically under 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-prime-blue font-semibold px-8 py-4 rounded-full hover:shadow-glass-hover transform hover:scale-105 transition-all duration-300"
              >
                Request Quote
              </a>
              <a
                href="/sample-kit"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Order Sample Kit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
