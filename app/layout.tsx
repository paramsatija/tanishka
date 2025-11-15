import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { HeaderDynamicIsland } from '@/components/shared/HeaderDynamicIsland';
import { Footer } from '@/components/shared/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://primepoly.in'),
  title: 'Prime Polymart - Premium Thermoplastic Resins & Polymers',
  description:
    'Leading distributor of engineering and commodity plastics since 1960. Serving manufacturers with ABS, PC, POM, Nylon, PP, HDPE, and specialty polymers across India and globally.',
  keywords:
    'plastics distributor, thermoplastic resins, ABS, polycarbonate, engineering plastics, commodity plastics, polymer supplier',
  authors: [{ name: 'Prime Polymart Pvt. Ltd.' }],
  openGraph: {
    title: 'Prime Polymart - Premium Thermoplastic Resins',
    description: 'Leading plastics distributor since 1960',
    url: 'https://primepoly.in',
    siteName: 'Prime Polymart',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <HeaderDynamicIsland />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
