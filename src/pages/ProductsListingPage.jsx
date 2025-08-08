import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import useCart from '../store/cartStore';
import Footer from '../components/Footer';

const ProductListingPage = () => {
  const { category: urlCategory } = useParams();
  
  // Get state and actions from zustand store
  const {
    products,
    filteredProducts,
    loading,
    error,
    category,
    searchTerm,
    fetchProducts,
    filterByCategory,
    setSearchTerm,
    filterProductsBySearch
  } = useCart();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  // Sync URL with store category
  useEffect(() => {
    if (urlCategory !== category) {
      filterByCategory(urlCategory || 'all');
    }
  }, [urlCategory, category, filterByCategory]);

  const handleSearch = (e) => {
    e.preventDefault()
    const term = e.target.value;
    setSearchTerm(term);
    filterProductsBySearch(term);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;
  //console.log(products)
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-800">
          {category && `${category.charAt(0).toUpperCase() + category.slice(1)} Products`}
          {!category && 'All Products'}
        </h1>
        
        <div className="relative w-72">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <RiSearchLine size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product._id} 
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 mb-3">
            {searchTerm ? 'No products match your search' : 'No products found in this category'}
          </p>
          <Link 
            to='/products/all'
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            View All Products
          </Link>
        </div>
      )}
      
      <Footer />
    </section>
  );
};

export default ProductListingPage;