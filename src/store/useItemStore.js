import { create } from 'zustand';

export const useItemStore = create((set, get) => ({
  products: [],
  favorites: [],
  searchTerm: '',
  loading: false,

  
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      set({ 
        products: data.products, 
        loading: false 
      });
    } catch (error) {
      console.error('Error:', error);
      set({ loading: false });
    }
  },


  setSearchTerm: (term) => set({ searchTerm: term }),

 

  getFilteredProducts: () => {
    const { products, searchTerm } = get();
    return products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}));