import { useQuery } from 'react-query';
import axios from 'axios';

const fetchTotalDonations = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v11/Donations/total');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching total donations: ' + error.message);
  }
};

const useGetTotalDonations = () => {
  return useQuery('totalDonations', fetchTotalDonations);
};

export default useGetTotalDonations;
