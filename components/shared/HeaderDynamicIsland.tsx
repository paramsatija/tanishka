'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {
  Home,
  Package,
  Info,
  Wrench,
  Award,
  Truck,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Package, label: 'Products', href: '/products' },
  { icon: Info, label: 'About', href: '/about' },
  { icon: Wrench, label: 'Services', href: '/services' },
  { icon: Award, label: 'Quality', href: '/quality' },
  { icon: Truck, label: 'Logistics', href: '/logistics' },
  { icon: Mail, label: 'Contact', href: '/contact' },
];

export function HeaderDynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.href === pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : navItems.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev < navItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter') {
        const activeNav = navItems[activeIndex];
        if (activeNav) {
          window.location.href = activeNav.href;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <motion.header
        className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="glass-intense rounded-full px-4 py-2 flex items-center gap-2"
          animate={{
            width: isExpanded || isScrolled ? '560px' : '400px',
            height: isScrolled ? '48px' : '56px',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <Link
            href="/"
            className="flex items-center gap-2 mr-2"
            aria-label="Prime Polymart Home"
          >
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="20" r="12" fill="#E63946" />
                <text
                  x="10"
                  y="75"
                  fontFamily="system-ui, -apple-system"
                  fontSize="48"
                  fontWeight="700"
                  fill="#1A3C72"
                >
                  PP
                </text>
              </svg>
              <AnimatePresence>
                {(isExpanded || !isScrolled) && (
                  <motion.span
                    className="font-semibold text-prime-blue whitespace-nowrap"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Prime Poly
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </Link>

          <nav className="flex items-center gap-1 flex-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                    isActive
                      ? 'bg-white/20'
                      : 'hover:bg-white/10'
                  }`}
                  aria-label={item.label}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-prime-blue' : 'text-steel-grey'
                    }`}
                  />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        className={`text-sm font-medium whitespace-nowrap ${
                          isActive ? 'text-prime-blue' : 'text-steel-grey'
                        }`}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </nav>

          <a
            href="/contact"
            className="cta-primary text-sm whitespace-nowrap ml-2"
          >
            Get Quote
          </a>
        </motion.div>
      </motion.header>

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 md:hidden glass-intense"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="20" r="12" fill="#E63946" />
              <text
                x="10"
                y="75"
                fontFamily="system-ui, -apple-system"
                fontSize="48"
                fontWeight="700"
                fill="#1A3C72"
              >
                PP
              </text>
            </svg>
            <span className="font-semibold text-prime-blue">Prime Poly</span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-prime-blue" />
            ) : (
              <Menu className="w-6 h-6 text-prime-blue" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/20"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-prime-blue text-white'
                          : 'hover:bg-white/10 text-steel-grey'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
                <a
                  href="/contact"
                  className="cta-primary text-center mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Quote
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-20" />
    </>
  );
}
