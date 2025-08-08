import { useState } from 'react';
import { RiMenuFill, RiArrowDropDownLine, RiAccountCircleLine, RiShoppingCartFill, RiCloseLine, RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from './CartIcon';
import etsy from "../assets/etsy.png";
import { useAuthStore } from '../store/authStore';

const Header = () => {
  
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

  const { isAuthenticated, logout} = useAuthStore()
  const navigate = useNavigate()

  // Toggle functions
  const toggleShop = () => setIsShopOpen(!isShopOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileShop = () => setIsMobileShopOpen(!isMobileShopOpen);

  

  // Logout function
  const handleLogout = () => {
    logout()
    navigate('/auth')
  };

  return (
    <header className="top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to='/'>
          <img src={etsy} alt='Logo' className='h-10' />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <RiCloseLine size={25} /> : (<RiMenuFill/>)}
        </button>

        {/* Navigation bar */}
        <nav className="hidden md:flex space-x-8">
          <Link to='/' className='text-gray-900 font-medium hover:text-primary transition-colors'>Home</Link>
          
          <div className="relative">
            <button 
              onClick={toggleShop}
              className="text-gray-900 font-medium hover:text-primary transition-colors flex items-center"
            >
              Shop
              <RiArrowDropDownLine className={`transition-transform ${isShopOpen ? 'rotate-180' : ''}`} />
            </button>
            {isShopOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded">
                <Link to="/products/women's%20clothing" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>Women</Link>
                <Link to="/products/men's%20clothing" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>Men</Link>
                <Link to='/products/electronics' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>Electronics</Link>
                <Link to='/products/jewelery' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>Jewelery</Link>
              </div>
            )}
          </div>
          
          <Link to='/products/all' className='text-gray-900 font-medium hover:text-primary transition-colors'>Collections</Link>
          <Link to='/cart' className='text-gray-900 font-medium hover:text-primary transition-colors'>Cart</Link>
          <Link to='/about' className='text-gray-900 font-medium hover:text-primary transition-colors'>About</Link>
        </nav>

        {/* Utility Icons */}
        <div className="hidden md:flex items-center space-x-6">

          {/* Account */}
          <div className="relative">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
                title="Logout"
              >
                <RiLogoutCircleRLine size={25} />
              </button>
            ) : (
              <Link
                to='/auth'
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
                title="Account"
              >
                <RiAccountCircleLine size={25} />
              </Link>
            )}
          </div>

          {/* Cart */}
          <CartIcon/>        
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container flex flex-col mx-auto px-4 py-3 space-y-3">
            <Link to='/' className="text-gray-900 font-medium hover:text-primary transition-colors">Home</Link>
            <div>
              <button
                onClick={toggleMobileShop}
                className="flex items-center justify-between w-full py-2 text-gray-900 font-medium"
              >
                Shop
                <RiArrowDropDownLine className={`transition-transform ${isMobileShopOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileShopOpen && (
                <div className="pl-4 space-y-2 mt-1">
                  <Link to="/products/women's%20clothing" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>Women</Link>
                  <Link to="/products/men's%20clothing" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>Men</Link>
                  <Link to='/products/electronics' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>Electronics</Link>
                  <Link to='/products/jewelery' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>Jewelery</Link>
                </div>
              )}
            </div>
            <Link to='/products/all' className='text-gray-900 font-medium hover:text-primary transition-colors'>Collections</Link>
            <Link to='/about' className='text-gray-900 font-medium hover:text-primary transition-colors'>About</Link>
            
            {/* Mobile utility buttons */}
            <div className="flex flex-col space-x-4 space-y-3">
              {isAuthenticated ? (
                <button 
                  onClick={handleLogout}
                  className="flex items-center text-gray-700"
                >
                  <RiLogoutCircleRLine size={20} className="mr-2" />
                  Logout
                </button>
              ) : (
                <Link to='/auth' className="flex items-center text-gray-700">
                  <RiAccountCircleLine size={20} className="mr-2" />
                  Account
                </Link>
              )}
              <Link to='/cart' className="flex items-center text-gray-700">
                <RiShoppingCartFill size={20} className="mr-2" />
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;