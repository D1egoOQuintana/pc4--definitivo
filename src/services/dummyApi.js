
export const getProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

S

export const searchProducts = async (query) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};