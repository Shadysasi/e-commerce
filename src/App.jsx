import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthStore } from './store/authStore';
import './App.css';
import Header from './components/Header';
import AuthPages from './pages/AuthPages';
import HomePages from "./pages/HomePages";
import FullCartPage from './pages/FullCartPage';
import ProductListingPage from "./pages/ProductsListingPage";
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CheckOutPage from './pages/CheckOutPage';

function App() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  // Initialize auth state on app load
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className="flex-grow">
          <Routes>    
            <Route path='/auth' element={<AuthPages />} />
            <Route path='/' element={<HomePages />} />
            <Route path='/products/:category' element={<ProductListingPage />} />
            <Route path='/product/:id' element={<ProductDetailPage />} />
            <Route path='/cart' element={<FullCartPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/checkout' element={<CheckOutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;