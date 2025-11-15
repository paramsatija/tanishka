import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  [key: string]: any;
}

export function BentoCard({
  children,
  className,
  hover = false,
  ...props
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white border border-gray-200 rounded-3xl p-6 shadow-soft',
        hover && 'cursor-pointer transition-all duration-300',
        className
      )}
      whileHover={
        hover
          ? { scale: 1.03, y: -4, boxShadow: '0 12px 40px rgba(17, 17, 17, 0.12)' }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
