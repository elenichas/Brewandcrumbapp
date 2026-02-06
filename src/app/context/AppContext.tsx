import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'bakery' | 'gift';
  subcategory?: 'hot coffee' | 'iced coffee' | 'cold brew' | 'hot tea' | 'iced tea';
  allergens?: string[];
  sizes?: Array<{ name: string; price: number }>;
  tag?: 'buy again' | 'almost sold out' | 'weekly offer' | 'sold out';
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedSize?: string;
  selectedSizePrice?: number;
  cartItemId: string; // Unique identifier for this cart item
}

interface DeliveryDetails {
  date: string;
  time: string;
  method: 'home' | 'pickup';
  address?: string;
}

interface AppContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity: number, size?: string, sizePrice?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  deliveryDetails: DeliveryDetails | null;
  setDeliveryDetails: (details: DeliveryDetails) => void;
  discount: number;
  applyDiscount: (percent: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails | null>(null);
  const [discount, setDiscount] = useState(0);

  const addToCart = (item: MenuItem, quantity: number, size?: string, sizePrice?: number) => {
    setCart(prevCart => {
      const cartItemId = `${item.id}-${size || 'default'}`;
      const existingItem = prevCart.find(cartItem => cartItem.cartItemId === cartItemId);

      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.cartItemId === cartItemId
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }

      return [
        ...prevCart,
        {
          ...item,
          quantity,
          selectedSize: size,
          selectedSizePrice: sizePrice,
          cartItemId
        }
      ];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(0);
  };

  const applyDiscount = (percent: number) => {
    setDiscount(percent);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        deliveryDetails,
        setDeliveryDetails,
        discount,
        applyDiscount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};