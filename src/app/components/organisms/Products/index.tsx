import { useAllProducts } from "@/app/hooks/data-hook";
import { useCart } from "@/context/CartContext";
import { MainButton } from "../../atoms/Button";
import { Card } from "../../atoms/Card";
import { Skeleton } from "../../atoms/Skeleton";
import { Product } from "./types";

export const Products = () => {
  const { data: productsData, isLoading } = useAllProducts();
  const { incrementCart } = useCart();
  
  if (isLoading) {
    return (
      <div className="text-center mt-4">
        <Skeleton />
      </div>
    );
  }
 
  return (
    <div className="lg:grid grid-cols-4 lg:gap-4 bg-red bg-white">
      {productsData?.map((product: Product) => (
        <div className="lg:w-full-scream" key={product.id}>
          <Card
            imageInfo={{
              image: product.photo,
              title: product.name,
            }}
            name={product.name}
            price={product.price}
            description={product.description}
          >
            <MainButton title="Comprar" onClick={incrementCart} />
          </Card>
        </div>
      ))}
    </div>
  );
};
