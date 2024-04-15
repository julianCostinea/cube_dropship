import { Product } from "@/types/types";
import ProductCard from "../product/product.component";
import styles from "./products.module.css";

interface IProps {
  products: Product[];
}

export default function Products({ products }: IProps) {
  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
