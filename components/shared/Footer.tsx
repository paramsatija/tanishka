import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prime-blue text-white mt-20">
      <div className="container-width py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="20" r="12" fill="#E63946" />
                <text
                  x="10"
                  y="75"
                  fontFamily="system-ui, -apple-system"
                  fontSize="48"
                  fontWeight="700"
                  fill="white"
                >
                  PP
                </text>
              </svg>
              <div className="text-xl font-bold">Prime Polymart</div>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Serving the plastics industry since 1960 with integrity, diligence, and respect.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white transition-colors">
                  Quality & Certifications
                </Link>
              </li>
              <li>
                <Link href="/logistics" className="hover:text-white transition-colors">
                  Logistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Engineering Plastics</li>
              <li>Commodity Plastics</li>
              <li>Specialty Polymers</li>
              <li>Custom Compounds</li>
              <li>Masterbatches</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>G-71, Kirti Nagar<br />New Delhi - 110015<br />India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919650794414" className="hover:text-white transition-colors">
                  +91-9650-794414
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:query@primepoly.in"
                  className="hover:text-white transition-colors"
                >
                  query@primepoly.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} Prime Polymart Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
