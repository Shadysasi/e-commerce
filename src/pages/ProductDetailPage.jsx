import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import useCart from '../store/cartStore';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCart(state => state.addToCart);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;
  if (!product) return <div className="text-center py-10">Product not found</div>;
  
  
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <img 
              src={product.data.image} 
              alt={product.data.title} 
              className="w-full h-80 object-contain"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {/* For products with multiple images */}
            <button 
              onClick={() => setSelectedImage(0)}
              className={`p-1 border rounded ${selectedImage === 0 ? 'border-indigo-600' : 'border-gray-200'}`}
            >
              <img 
                src={product.data.image} 
                alt={product.data.title} 
                className="w-16 h-16 object-contain"
              />
            </button>
            {/* Additional image placeholders */}
            {[1, 2, 3].map((imgIndex) => (
              <button 
                key={imgIndex}
                onClick={() => setSelectedImage(imgIndex)}
                className={`p-1 border rounded ${selectedImage === imgIndex ? 'border-indigo-600' : 'border-gray-200'}`}
                disabled
              >
                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center text-gray-400">
                  Image {imgIndex + 1}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.data.title}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 font-medium">{product.data.rating.rate}</span>
            </div>
            <span className="text-gray-500">{product.data.rating.count} reviews</span>
          </div>

          <div className="text-2xl font-bold text-indigo-600 mb-6">
          ₹ {product.data.price.toFixed(2)}
          </div>

          <p className="text-gray-600 mb-6">{product.data.description}</p>

          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3 py-1 border rounded-l hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b">{quantity}</span>
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-1 border rounded-r hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-grow bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
            >
              Add to Cart
            </button>
            <button className="flex-grow bg-gray-800 text-white py-3 rounded hover:bg-gray-700">
              Buy Now
            </button>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="font-bold text-gray-800 mb-2">Product Details</h3>
            <ul className="space-y-2">
              <li className="flex">
                <span className="text-gray-600 w-24">Category:</span>
                <span className="capitalize">{product.data.category}</span>
              </li>
              <li className="flex">
                <span className="text-gray-600 w-24">Availability:</span>
                <span className="text-green-600">In Stock</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="ml-2 font-medium">5.0</span>
            </div>
            <h3 className="font-bold">Excellent Product!</h3>
          </div>
          <p className="text-gray-600 mb-2">
            "This product exceeded my expectations. The quality is amazing and it arrived quickly."
          </p>
          <p className="text-sm text-gray-500">- John D., Verified Buyer</p>
        </div>

        <button className="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50">
          Write a Review
        </button>
      </div>
      <Footer/>
    </section>
  );
};

export default ProductDetailPage;