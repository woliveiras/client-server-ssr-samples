import { useContext } from "react";
import ShoppingCartContext from "@/components/context/cartContext";

type ProductCardType = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ id, name, price }: ProductCardType) {
  const { setItems, items } = useContext(ShoppingCartContext);
  const productAmount = id in items ? items[id] : 0;
  const handleAmount = (action: string) => {
    if (action === "increment") {
      const newItemAmount = id in items ? items[id] + 1 : 1;
      setItems({ ...items, [id]: newItemAmount });
    }

    if (action === "decrement") {
      if (items?.[id] > 0) {
        setItems({ ...items, [id]: items[id] - 1 });
      }
    }
  };
  return (
    <>
      <p>name: {name}</p>
      <p>price: {price}</p>
      <p>product amount in cart: {productAmount}</p>
      <div>
        <button onClick={() => handleAmount("increment")}>+</button>
        <button
          disabled={productAmount === 0}
          onClick={() => handleAmount("decrement")}
        >
          -
        </button>
      </div>
    </>
  );
}
