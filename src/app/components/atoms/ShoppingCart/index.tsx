import { useCart } from "@/context/CartContext";
import CancelIcon from '@mui/icons-material/Cancel';
import { Footer } from "../../organisms/Footer";
import { MainButton } from "../Button";
import { Card } from "../Card";

type ShoppingCartProps = {
    mainTitle: string;
    total: string;
    value: string;
}
export const ShoppingCart = ({ mainTitle, total, value }: ShoppingCartProps) => {
    const { incrementCart, decrementCart  } = useCart(); 
    return (
        <div className="bg-[#0f52ba] text-white font-bold w-96 h-1/2 left-3/4">
            <div className="flex justify-between p-4">
                <h1 className="text-center  text-lg">{mainTitle}</h1>
                <a href="#">
                    <CancelIcon />
                </a>
            </div>
            <div className="block">
                <Card
                    imageInfo={{
                        image: '',
                        title: 'product.name',
                    }}
                    name='{product.name}'
                    price='{product.price}'
                    description='{product.description}'
                >
                    <MainButton title="+" onClick={incrementCart} />
                    <MainButton title="-" onClick={decrementCart} />
                </Card>
            </div>
            <div className="flex justify-between m-auto p-8">
                <span>{total}</span>
                <span>{value}</span>
            </div>
            <a className="text-white" href="#">
                <Footer
                    className="bg-[#000000] bottom-0 " title="Finalizar compra"
                />
            </a>
        </div>
    )
}


