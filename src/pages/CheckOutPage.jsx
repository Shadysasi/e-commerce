
import { Link } from 'react-router-dom';
import useCart from '../store/cartStore';

const CheckOutPage = () => {
  const { 
    cartItems, 
    getSubtotal,
    clearCart
  } = useCart();

  const shippingCost = 5.99;
  const subtotal = parseFloat(getSubtotal());
  const total = (subtotal + shippingCost).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans text-gray-800">
      {/* Order Progress */}
      <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
        <li className="step0 active" id="step1">
          <span style={{ marginLeft: "22px", marginTop: "12px" }}>
            PLACED
          </span>
        </li>
        <li className="step0 active text-center" id="step2">
          <span>SHIPPED</span>
        </li>
        <li className="step0 text-muted text-end" id="step3">
          <span style={{ marginRight: "22px" }}>DELIVERED</span>
        </li>
      </ul>      
      
      {/* Customer Info */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold border-b pb-3 mb-4">Customer Information</h1>
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-gray-600">Please enter your information to complete the order</p>
          <Link to="/login" className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block">
            Already have an account? Log in
          </Link>
        </div>
      </div>

      {/* Payment and Shipping */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Payment Method</h2>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex items-center mb-2">
              <input type="radio" id="credit-card" name="payment" className="mr-2" defaultChecked />
              <label htmlFor="credit-card">Credit Card</label>
            </div>
            <div className="flex items-center mb-2">
              <input type="radio" id="paypal" name="payment" className="mr-2" />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="apple-pay" name="payment" className="mr-2" />
              <label htmlFor="apple-pay">Apple Pay</label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Shipping Address</h2>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      {/* Order Confirmation */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        
        {/* Product Listing */}
        <div className="mb-6">
          {cartItems.map(item => (
            <div key={item._id} className="border-b pb-4 mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <span className="font-medium">{item.title}</span>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <span>₹ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Order Total */}
        <div className="bg-gray-50 p-4 rounded">
          <div className="flex justify-between font-semibold border-b pb-2 mb-2">
            <span>Subtotal</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold border-b pb-2 mb-2">
            <span>Shipping Charge</span>
            <span>₹ {shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-3">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <Link 
          to="/cart" 
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Back to Cart
        </Link>
        <button 
          onClick={clearCart}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOutPage;