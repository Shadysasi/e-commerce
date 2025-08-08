
import { Link } from 'react-router-dom';
import useCart  from '../store/cartStore.js';

const ProductCard = ({ product }) => {
  const addToCart = useCart(state => state.addToCart);
  //console.log(product)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link to={`/product/${product._id}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain p-4"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product._id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
            {product.title}
          </h3>
        </Link>
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-indigo-600">
            ₹ {product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">
            {product.rating.rate} ★ ({product.rating.count})
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;