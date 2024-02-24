import { useContext } from "react";
import { CartContext } from "../context/CartProdiver";
import { UseCartContextType } from "../context/CartProdiver";

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart;