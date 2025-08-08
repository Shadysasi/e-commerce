import useCart from "../store/cartStore"
import { FaCartArrowDown } from "react-icons/fa";
import MiniCart from "./MiniCart";
const CartIcon = () => {
    const {toggleCart,getTotalItems,isCartOpen} = useCart();
    const itemCount = getTotalItems();

  return (
    <div className="relative">
        <button onClick={toggleCart} className="text-gray-700 hover:text-indigo-600">
          <FaCartArrowDown size={25}/>
        </button>
        {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
        </span>
        )}
        {isCartOpen && <MiniCart/>}
    </div>
  )
}

export default CartIcon