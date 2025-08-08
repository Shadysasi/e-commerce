// stores/authStore.js
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  // Initial state
  isAuthenticated: false,
  user: null,
  token: null,

  // Actions
  login: (token, userData) => {
    // Manual localStorage update
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Zustand state update
    set({ 
      isAuthenticated: true,
      token,
      user: userData 
    });
  },

  logout: () => {
    // Manual localStorage cleanup
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Zustand state update
    set({ 
      isAuthenticated: false,
      token: null,
      user: null 
    });
  },

  // Initialize function to check auth state
  initializeAuth: () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      set({
        isAuthenticated: true,
        token,
        user
      });
    }
  }
}));