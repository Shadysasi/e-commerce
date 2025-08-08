
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../store/cartStore';

const MiniCart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity,
    getSubtotal,
    getTotalItems
  } = useCart();

  const navigate = useNavigate()

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-transparent bg-opacity-50" onClick={toggleCart}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Your Cart ({getTotalItems()})</h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.id} className="flex border-b pb-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-20 h-20 object-contain"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium line-clamp-1">{item.title}</h3>
                      <p className="text-indigo-600 font-bold">₹ {item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 border rounded-l"
                        >
                          -
                        </button>
                        <span className="px-4 border-t border-b">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 border rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-bold">Subtotal:</span>
              <span className="font-bold">₹ {getSubtotal()}</span>
            </div>
            <div className="flex space-x-2">
              <Link 
                to="/cart" 
                onClick={toggleCart}
                className="flex-grow text-center bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
              >
                View Cart
              </Link>
              <button 
              onClick={()=>navigate('/checkout')}
                disabled={cartItems.length === 0}
                className={`flex-grow py-2 rounded ${
                  cartItems.length === 0 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;