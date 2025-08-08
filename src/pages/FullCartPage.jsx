import { Link, useNavigate } from 'react-router-dom';
import useCart from '../store/cartStore';
import Footer from '../components/Footer';

const FullCartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    getSubtotal,
    clearCart
  } = useCart();

  const navigate = useNavigate()

  const shippingCost = 5.99;
  const subtotal = parseFloat(getSubtotal());
  const total = (subtotal + shippingCost).toFixed(2);
  console.log(cartItems)

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/products/all" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-bold text-gray-700">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
              </div>
              
              <ul className="divide-y">
                {cartItems.map(item => (
                  <li key={item._id} className="p-4">
                    <div className="flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-5 flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-20 h-20 object-contain mr-4"
                        />
                        <div>
                          <h3 className="font-medium line-clamp-1">{item.title}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 text-sm mt-1 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 text-center">
                        <span className="md:hidden font-bold mr-2">Price:</span>
                        ₹ {item.price.toFixed(2)}
                      </div>
                      
                      <div className="md:col-span-3 flex justify-center">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 border rounded-l hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 border rounded-r hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 text-center">
                        <span className="md:hidden font-bold mr-2">Total:</span>
                        ₹ {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button 
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Clear Cart
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹ {shippingCost.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹ {total}</span>
                </div>
              </div>
              
              <button onClick={()=>navigate('/checkout')} className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
                Proceed to Checkout
              </button>
              
              <div className="mt-4 text-center">
                <Link 
                  to='/products/all' 
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default FullCartPage;