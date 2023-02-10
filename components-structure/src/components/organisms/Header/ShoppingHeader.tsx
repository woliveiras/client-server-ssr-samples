import { useContext } from "react";
import ShoppingCartContext from "@/components/context/cartContext";

export default function ShoppingHeader() {
  const { items } = useContext(ShoppingCartContext);
  const totalProducts = items
    ? Object.values(items).reduce((a: any, b) => a + b, 0)
    : 0;
  return (
    <header>
      <p>{totalProducts}</p>
    </header>
  );
}
