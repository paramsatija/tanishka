import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  sku: string;
  slug: string;
  name: string;
  summary: string;
  image: string;
  applications: string[];
}

export function ProductCard({
  sku,
  slug,
  name,
  summary,
  image,
  applications,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      className="group"
    >
      <Link href={`/products/${slug}`}>
        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-soft hover:shadow-glass-hover transition-shadow duration-300">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-6">
            <div className="text-xs font-medium text-steel-grey mb-2">{sku}</div>
            <h3 className="text-xl font-semibold text-ink mb-3 group-hover:text-prime-blue transition-colors">
              {name}
            </h3>
            <p className="text-muted-text text-sm mb-4 line-clamp-2">
              {summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {applications.slice(0, 2).map((app, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 text-steel-grey px-3 py-1 rounded-full"
                >
                  {app}
                </span>
              ))}
              {applications.length > 2 && (
                <span className="text-xs text-steel-grey">
                  +{applications.length - 2} more
                </span>
              )}
            </div>

            <div className="flex items-center text-prime-blue font-medium text-sm group-hover:gap-2 gap-1 transition-all">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
