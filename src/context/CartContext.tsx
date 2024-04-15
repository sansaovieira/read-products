import { ReactNode, createContext, useContext, useState } from 'react';

type CartContextType = {
  cartValue: number;
  incrementCart: () => void;
  decrementCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartValue, setCartValue] = useState(0);

  const incrementCart = () => {
    setCartValue(prevValue => prevValue + 1);
  };

  const decrementCart = () => {
    setCartValue(prevValue => prevValue - 1);
  };

  return (
    <CartContext.Provider value={{ cartValue, incrementCart, decrementCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
