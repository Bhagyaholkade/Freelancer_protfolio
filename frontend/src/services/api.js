import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const contactService = {
  submit: async (data) => {
    const response = await api.post('/contact', data);
    return response.data;
  }
};

export const projectService = {
  getAll: async (params = {}) => {
    const response = await api.get('/projects', { params });
    return response.data;
  },
  getBySlug: async (slug) => {
    const response = await api.get(`/projects/${slug}`);
    return response.data;
  },
  getCategories: async () => {
    const response = await api.get('/projects/categories');
    return response.data;
  }
};

export const testimonialService = {
  getAll: async (params = {}) => {
    const response = await api.get('/testimonials', { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/testimonials/${id}`);
    return response.data;
  }
};

export default api;
