import axios from 'axios';

const API_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: API_URL,
});

const apiService = {
  get: async (endpoint) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('GET request error:', error);
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  },

  put: async (endpoint, data) => {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('PUT request error:', error);
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('DELETE request error:', error);
      throw error;
    }
  }
};

export default apiService;
