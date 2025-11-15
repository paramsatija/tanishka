'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/shared/ProductCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Search } from 'lucide-react';
import products from '@/data/products.json';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'engineering', name: 'Engineering Plastics' },
    { id: 'commodity', name: 'Commodity Plastics' },
    { id: 'specialty', name: 'Specialty Polymers' },
  ];

  const engineeringPlastics = ['ABS', 'PC', 'PBT', 'POM', 'Nylon', 'PMMA', 'PPS', 'SAN'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedCategory === 'all') return matchesSearch;

    if (selectedCategory === 'engineering') {
      return matchesSearch && engineeringPlastics.some((eng) => product.name.includes(eng));
    }

    if (selectedCategory === 'commodity') {
      return (
        matchesSearch &&
        (product.name.includes('PP') ||
          product.name.includes('HDPE') ||
          product.name.includes('LLDPE') ||
          product.name.includes('GPPS') ||
          product.name.includes('HIPS') ||
          product.name.includes('PVC'))
      );
    }

    return matchesSearch;
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-prime-blue via-prime-blue to-steel-grey text-white py-20">
        <div className="container-width">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-white mb-6">Product Catalog</h1>
            <p className="text-white/90 text-xl mb-8">
              Comprehensive range of thermoplastic resins — from engineering polymers to commodity
              plastics. All grades tested, certified, and ready for immediate dispatch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-width py-12">
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel-grey" />
            <input
              type="text"
              placeholder="Search products by name, SKU, or application..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-prime-blue focus:ring-2 focus:ring-prime-blue/20 outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-prime-blue text-white'
                    : 'bg-gray-100 text-steel-grey hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product) => (
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-steel-grey text-lg">
              No products found matching your search criteria.
            </p>
          </div>
        )}
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-width text-center">
          <h3 className="text-2xl font-semibold mb-4">Can't find what you need?</h3>
          <p className="text-muted-text mb-6">
            We offer custom compounding and can source specialized grades.
          </p>
          <a href="/contact" className="cta-primary">
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
