/** @format */

import { createContext } from "react";
import CartParent from "./CartParent";
import { products } from "./Products";
export const CartContext = createContext();
function Cart() {
  return (
    <CartContext.Provider value={products}>
      <CartParent />
    </CartContext.Provider>
  );
}

export default Cart;
