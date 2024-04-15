import { Product } from "@/types/types";
import { signal } from "@preact/signals";

export const cartSignal = signal<Array<Product>>([]);
