'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/shared/ContactForm';
import { BentoCard } from '@/components/shared/BentoCard';
import { fadeInUp } from '@/lib/animations';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-prime-blue to-steel-grey text-white py-20">
        <div className="container-width">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-white mb-6">Get In Touch</h1>
            <p className="text-white/90 text-xl">
              Request a quote, order samples, or speak with our technical team. We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-width py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <BentoCard>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-prime-blue flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">Visit Us</div>
                      <p className="text-muted-text text-sm">
                        G-71, Kirti Nagar
                        <br />
                        New Delhi - 110015
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </BentoCard>

                <BentoCard>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-prime-blue flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">Call Us</div>
                      <a
                        href="tel:+919650794414"
                        className="text-muted-text text-sm hover:text-prime-blue transition-colors"
                      >
                        +91-9650-794414
                      </a>
                    </div>
                  </div>
                </BentoCard>

                <BentoCard>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-prime-blue flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">Email Us</div>
                      <a
                        href="mailto:query@primepoly.in"
                        className="text-muted-text text-sm hover:text-prime-blue transition-colors"
                      >
                        query@primepoly.in
                      </a>
                    </div>
                  </div>
                </BentoCard>

                <BentoCard>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-prime-blue flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium mb-1">Business Hours</div>
                      <p className="text-muted-text text-sm">
                        Monday - Saturday: 9:00 AM - 6:00 PM IST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </BentoCard>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5438782389287!2d77.14116931508!3d28.651693782419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d3c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sKirti%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prime Polymart Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
