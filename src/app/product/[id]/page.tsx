import { Product } from "@/types/product";
import { products } from "../../../../public/products";

export default function ProductPage({ params }: { params: { id: string } }) {  
  const product: Product | undefined = products.find((product) => product.id === params.id);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </div>
  );
}
