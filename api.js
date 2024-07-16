// api.js
import axios from 'axios';

const BASE_URL = 'http://example.com/api'; // Replace with your actual API base URL

// Fetch all products based on category and company
export const fetchProducts = async (category, company) => {
  const apiUrl = `${BASE_URL}/products?category=${category}&company=${company}`;
  try {
    const response = await axios.get(apiUrl, { timeout: 500 });
    return response.data.numbers; // Adjust based on actual API response structure
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

// Fetch a product by its ID
export const fetchProductById = async (id) => {
  const apiUrl = `${BASE_URL}/product/${id}`;
  try {
    const response = await axios.get(apiUrl, { timeout: 500 });
    return response.data; // Adjust based on actual API response structure
  } catch (error) {
    console.error("Error fetching product:", error.message);
    throw error;
  }
};
