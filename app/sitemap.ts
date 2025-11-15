import { MetadataRoute } from 'next';
import products from '@/data/products.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://primepoly.in';

  const staticPages = [
    '',
    '/about',
    '/products',
    '/services',
    '/quality',
    '/logistics',
    '/contact',
    '/sample-kit',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages];
}
