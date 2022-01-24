import { useEffect, useState } from 'react';
import Link from 'next/link';

import ProductsService from 'services/products/ProductsService';
import HomeHeader from '@components/HomeHeader/HomeHeader';
import ProductList from '@components/ProductList/ProductList';
import Loading from '@components/Loading/Loading';

import styles from '@styles/pages/home.module.scss';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState<TProduct[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await ProductsService.getAll();
        setProductList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (productList) {
      return <ProductList products={productList} />;
    }
    return <p>Product list cannot be loaded</p>;
  };

  return (
    <main className={styles.Home}>
      <div className='container'>
        <HomeHeader />
        <div className={styles.HomeDescription}></div>
        {renderContent()}
      </div>
    </main>
  );
};

export default HomePage;
