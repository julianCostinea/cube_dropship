import Products from "./components/products/products.component";
import { products } from "../../public/products";

export default function Home() {
  return <Products products={products} />;
}
