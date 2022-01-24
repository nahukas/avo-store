import Header from '@components/Layout/Header/Header';
import Footer from '@components/Layout/Footer/Footer';

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
