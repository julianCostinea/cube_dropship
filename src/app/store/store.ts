import { Product } from "@/types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Cart {
  cartItems: Product[];
  addToCart(item: Product): void;
}

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

export const useCartStore = create<Cart>()(
  devtools(
    (set) => ({
      cartItems: [],
      addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
    }),
    { name: "cartStore" }
  )
);
