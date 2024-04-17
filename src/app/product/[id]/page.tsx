"use client";

import { Product } from "@/types/types";
import { products } from "../../../../public/products";
import styles from "./page.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product: Product | undefined = products.find((product) => product.id === params.id);

  const addToCart = (product: Product) => () => {
    // cartSignal.value = [...cartSignal.value, product];
  };

  return (
    <>
      {product ? (
        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image src={product.imageUrl} alt={product.name} fill={true} placeholder="blur" blurDataURL="/blur.jpg" />
          </div>
          <div className={styles.productContent}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>
              Get it today for: <strong>${product.price}</strong>
            </p>
            <Button variant="contained" color="primary" sx={{ marginTop: "0.5rem" }} onClick={addToCart(product)}>
              Add to cart &nbsp;
              <ShoppingCart />
            </Button>
          </div>
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </>
  );
}
