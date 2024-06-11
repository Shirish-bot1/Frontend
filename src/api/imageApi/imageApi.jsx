// src/services/imageApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v3', // Update the base URL if needed
});

export const uploadImage = async (formData) => {
  const response = await api.post('/images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const fetchImages = async () => {
  const response = await api.get('/images');
  return response.data;
};

export const fetchImageById = async (id) => {
  const response = await api.get(`/images/${id}`);
  return response.data;
};

export const updateImage = async (id, formData) => {
  const response = await api.put(`/images/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteImage = async (id) => {
  const response = await api.delete(`/images/${id}`);
  return response.data;
};
