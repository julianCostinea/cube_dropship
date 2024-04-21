"use client";

import { Product } from "@/types/types";
import styles from "./page.module.scss";
import Image from "next/image";
import { CartItem, useCartStore } from "@/app/store/store";
import { Button } from "@mui/material";
import { RemoveCircle, AddCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { cartItems, removeFromCart, addToCart } = useCartStore();

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className={styles.cartContainer}>
      <h1>Cart</h1>
      {loaded ? (
        <>
          {cartItems.length === 0 ? (
            <h3>Your cart is empty</h3>
          ) : (
            <div>
              <div className={styles.cartItems}>
                {cartItems.map((item: CartItem, index) => (
                  <div key={`${item.id}${index}`} className={styles.cartItem}>
                    <div className={styles.cartItemImage}>
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill={true}
                        placeholder="blur"
                        blurDataURL="/blur.jpg"
                      />
                    </div>
                    <div className={styles.cartItemContent}>
                      <h2>{item.name}</h2>
                      <p>Total: ${item.price * item.quantity}</p>
                      <p>Price per unit: ${item.price}</p>
                      <div className={styles.carItemButtons}>
                        <Button variant="contained" color="secondary" onClick={() => removeFromCart(item)}>
                          <RemoveCircle />
                        </Button>
                        {<span style={{ fontWeight: "bold" }}>{item.quantity}</span>}
                        <Button variant="contained" color="primary" onClick={() => addToCart(item)}>
                          <AddCircle />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.cartTotal}>
                <h2>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
              </div>
            </div>
          )}
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
