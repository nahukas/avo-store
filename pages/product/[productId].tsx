import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ProductsService from 'services/products/ProductsService';

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
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      {product ? <h1>Avocado: {product.name}</h1> : <h1>Product not found</h1>}
    </section>
  );
};

export default ProductItem;
