import { create } from 'zustand';
import axios from 'axios';

const useCart = create((set, get) => ({
  // Product state
  products: [],
  filteredProducts: [],
  searchTerm: '',
  loading: true,
  error: null,
  category: 'all',

  // Cart state
  cartItems: [],
  isCartOpen: false,

  // Product actions
  fetchProducts: async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/products');
      const data = response.data
      const productArray = Array.isArray(data) ? data : Object.values(data).flat();
      
      set({ 
        products: productArray, 
        filteredProducts: productArray,
        loading: false 
      });
    } catch (err) {
      set({ 
        error: err.message, 
        loading: false 
      });
    }
  },

  filterByCategory: (category) => {
    set((state) => {
      if (category === 'all') {
        return { 
          filteredProducts: state.products,
          category: 'all'
        };
      }
      
      const filtered = state.products.filter(
        (product) => product?.category?.toLowerCase() === category.toLowerCase()
      );
      
      return { 
        filteredProducts: filtered,
        category
      };
    });
  },

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterProductsBySearch: (term) => {
    set((state) => {
      if (!term.trim()) {
        return { filteredProducts: state.products };
      }
      
      const filtered = state.products.filter(product => 
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
      );

      return { filteredProducts: filtered };
    });
  },

  // Cart actions
  addToCart: (product) => set((state) => {

    const existingItem = state.cartItems.find(item => item.id === product._id);
    
    if (existingItem) {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    
    return {
      cartItems: [...state.cartItems, { ...product, quantity: 1 }]
    };
  }),
  
  removeFromCart: (productId) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== productId)
  })),
  
  updateQuantity: (productId, newQuantity) => set((state) => ({
    cartItems: state.cartItems.map(item =>
      item.id === productId 
        ? { ...item, quantity: Math.max(1, newQuantity) }
        : item
    )
  })),
  
  toggleCart: () => set((state) => ({ 
    isCartOpen: !state.isCartOpen 
  })),
  
  clearCart: () => set({ 
    cartItems: [] 
  }),
  
  
  getTotalItems: () => {
    return get().cartItems.reduce(
      (total, item) => total + item.quantity, 0
    );
  },
  
  getSubtotal: () => {
    return get().cartItems.reduce(
      (total, item) => total + (item.price * item.quantity), 0
    ).toFixed(2);
  },

}));

export default useCart;