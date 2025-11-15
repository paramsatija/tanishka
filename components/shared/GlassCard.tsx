import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: keyof typeof motion;
  [key: string]: any;
}

export function GlassCard({
  children,
  className,
  hover = false,
  as = 'div',
  ...props
}: GlassCardProps) {
  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      className={cn(
        'glass rounded-3xl p-6',
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
    </MotionComponent>
  );
}
