import  { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        // Fetch only 4 products to feature on the home page
        const response = await axios.get('https://fakestoreapi.com/products?limit=4');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link 
            to="/products/all" 
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            View All Products →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;