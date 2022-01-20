import Navbar from '@components/Navbar/Navbar';

const Layout: React.FC = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <footer>this is a footer</footer>
  </div>
);

export default Layout;
