// src/api/donations.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const getAllDonations = async () => {
  const { data } = await api.get('/donations');
  return data;
};

export const createDonation = async (donation) => {
  const { data } = await api.post('/donations', donation);
  return data;
};

export const updateTrackingStatus = async (id, status) => {
  const { data } = await api.put(`/donations/${id}`, { trackingStatus: status });
  return data;
};

export const deleteDonation = async (id) => {
  const { data } = await api.delete(`/donations/${id}`);
  return data;
};

export const generateDonationReports = async () => {
  const { data } = await api.get('/donations/reports');
  return data;
};
