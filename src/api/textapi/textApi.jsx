// src/services/textApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v8', // Update the base URL if needed
});

export const createText = async (content) => {
  const response = await api.post('/text', { content });
  return response.data;
};

export const deleteText = async (id) => {
  const response = await api.delete(`/admin/text/${id}`);
  return response.data;
};

export const fetchTextById = async (id) => {
  const response = await api.get(`/admin/text/${id}`);
  return response.data;
};

export const updateText = async (id, content) => {
  const response = await api.put(`/admin/text/${id}`, { content });
  return response.data;
};
export const getAllTexts = async () => {
    try {
      const response = await api.get('/admin/text');
      return response.data;
    } catch (error) {
      console.error('Error fetching all texts:', error);
      throw error;
    }
  };
