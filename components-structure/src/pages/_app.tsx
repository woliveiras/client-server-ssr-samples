import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import CartContext from "@/components/context/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState({});

  return (
    <CartContext.Provider value={{ items, setItems }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}
