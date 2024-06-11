import { useQuery } from 'react-query';
import axios from 'axios';

const fetchAllDonations = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v11/Donations');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching donations: ' + error.message);
  }
};

const useGetAllDonations = () => {
  return useQuery('allDonations', fetchAllDonations);
};

export default useGetAllDonations;
