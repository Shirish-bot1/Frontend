import { useQuery } from 'react-query';
import axios from 'axios';

const fetchDailyDonations = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v11/Donations/daily');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching daily donations: ' + error.message);
  }
};

const useGetDailyDonations = () => {
  return useQuery('dailyDonations', fetchDailyDonations);
};

export default useGetDailyDonations;
