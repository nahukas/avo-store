import { useRouter } from 'next/router';

const ProductItem: React.FC = () => {
  const router = useRouter();
  const {
    query: { productId }
  } = router;

  return (
    <div>
      <h1>Product Item Page! {productId}</h1>
    </div>
  );
};

export default ProductItem;
