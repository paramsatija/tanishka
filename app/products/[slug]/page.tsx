import { ProductDetail } from '@/components/shared/ProductDetail';
import products from '@/data/products.json';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product as any} />;
}
