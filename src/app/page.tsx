import Products from "./components/products/products.component";
import styles from "./page.module.css";
import { products } from "../../public/products";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Products products={products} />
      </div>
    </main>
  );
}
