import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ProductsService from 'services/products/ProductsService';
import Loading from '@components/Loading/Loading';
import ProductSummary from '@components/ProductSummary/ProductSummary';

const ProductItem: React.FC = () => {
  const router = useRouter();
  const {
    query: { productId }
  } = router;
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await ProductsService.getById(productId as string);
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <main>
      <div className='container'>
        {product == null ? <Loading /> : <ProductSummary product={product} />}
      </div>
    </main>
  );
};

export default ProductItem;
