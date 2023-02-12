import '../styles/globals.css';
import Layout from '../components/Layout';
import { CartProvider } from '../utils/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
