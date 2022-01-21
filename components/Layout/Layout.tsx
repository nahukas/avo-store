import Header from '@components/Header/Header';

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    {children}
    <footer>this is a footer</footer>
  </div>
);

export default Layout;
