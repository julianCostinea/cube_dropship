import { Product } from "@/types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Cart {
  cartItems: CartItem[];
  addToCart(item: Product): void;
  clearCart(): void;
  removeFromCart(item: Product): void;
}

export type CartItem = Product & { quantity: number };

// export const useCartStore = create<Cart>()(
//   devtools(
//     persist(
//       (set) => ({
//         cartItems: [],
//         addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
//       }),
//       { name: "cartStore" }
//     )
//   )
// );

const addToCart = (cartItems: CartItem[], item: Product) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

const removeFromCart = (cartItems: CartItem[], item: Product) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

export const useCartStore = create<Cart>()(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        addToCart: (item) => set((state) => ({ cartItems: addToCart(state.cartItems, item) })),
        clearCart: () => set({ cartItems: [] }),
        removeFromCart: (item) => set((state) => ({ cartItems: removeFromCart(state.cartItems, item) })),
      }),
      { name: "cartStore" }
    )
  )
);
