import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProduct'
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import womenClothing from "../assets/womenClothing.jpg"
import menClothing from "../assets/menClothing.jpg"
import electronics from "../assets/electronics.jpg"
import jewelery from "../assets/jewelry.jpg"
import Footer from '../components/Footer';
const HomePages = () => {
  return (
    <>
      <Hero/>
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link to="/products/women's%20clothing" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={womenClothing}
                  alt="Women's Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Women</h3>
                    <p className="text-white/80 text-sm">View Collection</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products/men's%20clothing" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={menClothing}
                  alt="Men's Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Men</h3>
                    <p className="text-white/80 text-sm">View Collection</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products/electronics" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={electronics}
                  alt="electronics Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Electronics
                    </h3>
                    <p className="text-white/80 text-sm">View Collection</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products/jewelery" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={jewelery}
                  alt="jewelery Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      Jewelery
                    </h3>
                    <p className="text-white/80 text-sm">View Collection</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProducts/>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "The quality of the clothes is exceptional. I've ordered multiple
                times and have never been disappointed. The customer service is
                also top-notch!"
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4"
                >
                  <RiAccountCircleLine />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Emily Richardson</h4>
                  <p className="text-sm text-gray-500">Loyal Customer</p>
                </div>
              </div>
            </div>
        
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "Fast shipping and the products look exactly like the pictures.
                The sizing guide was very helpful. Will definitely shop here
                again!"
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4"
                >
                  <RiAccountCircleLine/>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Michael Thompson</h4>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-amber-400 mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
              <p className="text-gray-700 mb-6">
                "I love the sustainable approach this brand takes. The packaging
                is eco-friendly and the clothes are made from high-quality,
                sustainable materials."
              </p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4"
                >
                  <RiAccountCircleLine/>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Sophia Martinez</h4>
                  <p className="text-sm text-gray-500">Repeat Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default HomePages
