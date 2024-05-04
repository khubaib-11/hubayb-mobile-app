import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type CartItem = {
  id: number;
  product_name: string;
  product_price: number;
  product_image: string;
  product_weight: string;
  quantityInCart: number;
};

type CartContextType = {
  cart: CartItem[] | [];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotalPrice: () => number;
  updateItemQuantityInCart: (item: CartItem, newQuantity: number) => void;
  getItemQuantityInCart: (id: number) => number;
};

export const CartContext = createContext<CartContextType>();

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<[] | CartItem[]>([]);

  const addItemToCart = (item: CartItem) => {
    // check if the item is already in the cart
    const isItemInCart = cart.find((cartItem: CartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCart((prevCart) =>
        // if the item is already in the cart, increase the quantity of the item
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantityInCart: cartItem.quantityInCart + 1 }
            : // otherwise, return the cart item
              cartItem,
        ),
      );
    } else {
      // if the item is not in the cart, add the item to the cart
      setCart([...cart, { ...item, quantityInCart: 1 }]);
    }
  };
  function removeItemFromCart(item: CartItem) {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((i) => i.id === item.id);
      if (existingProductIndex > -1) {
        const item = prevCart[existingProductIndex];
        if (item.quantityInCart > 1) {
          // Reduce the quantityInCart by one
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantityInCart: cartItem.quantityInCart - 1 }
              : cartItem,
          );
        } else {
          // Remove the item from the cart entirely
          return prevCart.filter((cartItem) => cartItem.id !== item.id);
        }
      }
      return prevCart; // If the product is not found, return the cart unchanged
    });
  }

  function getCartTotalPrice() {
    if (cart.length === 0) return 0;
    return cart.reduce((sum, curr) => curr.product_price * curr.quantityInCart + sum, 0);
  }

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  function updateItemQuantityInCart(item: CartItem, newQuantity: number) {
    setCart((c) =>
      c.map((i) => (i.id === item.id ? { ...item, quantityInCart: newQuantity } : item)),
    );
  }

  // Utility to check the product quantity in the cart
  const getItemQuantityInCart = (productId: number) => {
    const product = cart.find((item) => item.id === productId);
    return product ? product.quantityInCart : 0;
  };

  const value = useMemo(
    () => ({
      cart,
      addItemToCart,
      removeItemFromCart,
      getCartTotalPrice,
      clearCart,
      updateItemQuantityInCart,
      getItemQuantityInCart,
    }),
    [
      cart,
      addItemToCart,
      removeItemFromCart,
      getCartTotalPrice,
      clearCart,
      updateItemQuantityInCart,
      getItemQuantityInCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error(
      "Your component don't have access to the cart provider. Try wrapping it inside cart provider",
    );
  }

  return cart;
}

export default CartProvider;
