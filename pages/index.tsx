import { useEffect, useState } from 'react';

import ProductsService, {
  ProductsResponse
} from 'services/products/ProductsService';

const HomePage: React.FC = () => {
  const [productList, setProductList] = useState<ProductsResponse | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await ProductsService.getAll();
      setProductList(response);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      {productList &&
        productList.data.map((product) => <div>{product.name}</div>)}
    </div>
  );
};

export default HomePage;
