'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BentoCard } from './BentoCard';
import { Download, Package, FileText, Mail, ArrowLeft, Check } from 'lucide-react';

interface ProductDetailProps {
  product: {
    sku: string;
    slug: string;
    name: string;
    summary: string;
    description: string;
    image: string;
    specs: Record<string, string>;
    applications: string[];
    packaging: string[];
    moq: string;
  };
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specs', label: 'Technical Specs' },
    { id: 'applications', label: 'Applications' },
    { id: 'packaging', label: 'Packaging' },
  ];

  return (
    <div>
      <section className="container-width py-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-prime-blue hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          >
            <div className="inline-block bg-gray-100 text-steel-grey text-sm font-medium px-4 py-2 rounded-full mb-4">
              {product.sku}
            </div>
            <h1 className="mb-4">{product.name}</h1>
            <p className="text-muted-text text-lg mb-6">{product.summary}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-prime-blue flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium mb-1">Minimum Order Quantity</div>
                  <div className="text-muted-text">{product.moq}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-prime-blue flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium mb-1">Packaging Options</div>
                  <div className="text-muted-text">{product.packaging.join(', ')}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="cta-primary">
                Request Quote
              </a>
              <a
                href={`/specs/${product.sku}.pdf`}
                className="cta-secondary flex items-center gap-2"
                download
              >
                <Download className="w-4 h-4" />
                Download Spec Sheet
              </a>
            </div>

            <div className="mt-8 p-4 bg-gold-400/10 border border-gold-400/30 rounded-2xl">
              <p className="text-sm text-steel-grey">
                <Mail className="w-4 h-4 inline mr-2" />
                Typical response time: <span className="font-medium text-ink">Under 24 hours</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-all relative ${
                  activeTab === tab.id
                    ? 'text-prime-blue'
                    : 'text-steel-grey hover:text-prime-blue'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-prime-blue"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="max-w-4xl">
              <h3 className="text-2xl font-semibold mb-4">Product Overview</h3>
              <p className="text-muted-text text-lg leading-relaxed">{product.description}</p>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="max-w-4xl">
              <h3 className="text-2xl font-semibold mb-6">Technical Specifications</h3>
              <BentoCard>
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <tr
                        key={key}
                        className={index !== 0 ? 'border-t border-gray-200' : ''}
                      >
                        <td className="py-4 font-medium text-ink capitalize">
                          {key.replace(/_/g, ' ')}
                        </td>
                        <td className="py-4 text-muted-text text-right">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </BentoCard>
              <p className="text-sm text-steel-grey mt-4">
                * Specifications may vary by grade. Contact us for detailed datasheets and COAs.
              </p>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="max-w-4xl">
              <h3 className="text-2xl font-semibold mb-6">Key Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.applications.map((app, index) => (
                  <BentoCard key={index}>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-prime-blue flex-shrink-0 mt-0.5" />
                      <span className="text-ink">{app}</span>
                    </div>
                  </BentoCard>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'packaging' && (
            <div className="max-w-4xl">
              <h3 className="text-2xl font-semibold mb-6">Packaging Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.packaging.map((pkg, index) => (
                  <BentoCard key={index} className="text-center">
                    <Package className="w-12 h-12 text-prime-blue mx-auto mb-4" />
                    <div className="font-semibold text-lg">{pkg}</div>
                  </BentoCard>
                ))}
              </div>
              <div className="mt-8">
                <BentoCard className="bg-gray-50">
                  <h4 className="font-semibold mb-3">Custom Packaging Available</h4>
                  <p className="text-muted-text text-sm">
                    We can accommodate special packaging requirements for bulk orders. Private
                    labeling and custom marking options available upon request.
                  </p>
                </BentoCard>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Order?</h3>
            <p className="text-muted-text mb-6">
              Get a custom quote, request samples starting from 5 kg, or speak with our technical
              team about your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="cta-primary">
                Get Custom Quote
              </a>
              <a href="/sample-kit" className="cta-secondary">
                Order Sample
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
