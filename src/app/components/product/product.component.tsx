"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "@/types/types";
import Link from "next/link";
import { products } from "../../../../public/products";
import { useCartStore } from "@/app/store/store";

interface IProps extends Product {}

export default function ProductCard({ description, id, name, price, imageUrl }: IProps) {
  const { addToCart } = useCartStore();

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, productId: string) => {
    event.preventDefault();

    const product = products.find((product) => product.id === productId);
    if (!product) return;

    addToCart(product);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/product/${id}`}>
        <CardMedia
          sx={{ height: 240, backgroundPosition: "top", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          image={imageUrl}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substring(0, 87) + "..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" variant="contained" color="primary" onClick={(event) => addToCartHandler(event, id)}>
            Add to Cart
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
