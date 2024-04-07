import DrawerAppBar from "./components/navbar/navbar.component";
import Products from "./components/products/products.component";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import { products } from "../../public/products";

export default function Home() {
  return (
    <main className={styles.main}>
      <DrawerAppBar />
      <div className={styles.center}>
        <Products products={products} />
      </div>
    </main>
  );
}
