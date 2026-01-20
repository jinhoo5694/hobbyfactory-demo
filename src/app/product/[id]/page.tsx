import { notFound } from 'next/navigation';
import { getProductById, getAllProducts } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: '상품을 찾을 수 없습니다 - 하비팩토리',
    };
  }

  return {
    title: `${product.name} - 하비팩토리`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
