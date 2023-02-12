import { createContext, useReducer, useContext, useState } from 'react';
import { initialState, reducer } from './Reducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
