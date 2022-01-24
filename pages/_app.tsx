import { AppProps } from 'next/app';

import CartProvider from '@store/CartProvider';
import Layout from 'components/Layout/Layout';

import 'semantic-ui-css/semantic.min.css';
import '@styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
};

export default MyApp;
