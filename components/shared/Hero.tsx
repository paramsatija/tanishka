'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '@/lib/animations';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundImage: string;
  minHeight?: string;
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  minHeight = '600px',
}: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 125]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight }}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </motion.div>

      <div className="relative z-10 container-width h-full flex items-center" style={{ minHeight }}>
        <div className="max-w-4xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-white mb-6 text-shadow text-balance">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          >
            <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl text-balance">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            {primaryCta && (
              <a href={primaryCta.href} className="cta-primary">
                {primaryCta.text}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {secondaryCta.text}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
