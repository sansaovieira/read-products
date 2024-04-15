import { useAllProducts } from "@/app/hooks/data-hook";
import { useCart } from "@/context/CartContext";
import { MainButton } from "../../atoms/Button";
import { Card } from "../../atoms/Card";
import { Product } from "./types";

export const Products = () => {
  const { data: productsData, isLoading } = useAllProducts();
  const { incrementCart } = useCart();
  
  // if (isLoading) return <Skeleton />
  
  return (
    <div className="w-screen grid grid-cols-4">
      {productsData?.map((product: Product) => (
        <div className="m-auto 0 py-[4rem] drop-shadow-lg" key={product.id}>
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
