import { useCart } from '../utils/CartContext';
import cart from '../public/shopping-cart.svg';
import Image from 'next/image';

const ShoppingCart = () => {
  const { state, setCartOpen } = useCart();

  return (
    <span className="relative lg:scale-50 lg:hover:scale-75 scale-90 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer mx-3">
      <Image
        src={cart}
        alt="cart"
        height={60}
        width={60}
        className=""
        onClick={() => setCartOpen(true)}
      />
      <span className="bg-blue-700 text-sm rounded-full py-1 px-2 absolute bottom-1 left-0">
        {state.cart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </span>
  );
};

export default ShoppingCart;
