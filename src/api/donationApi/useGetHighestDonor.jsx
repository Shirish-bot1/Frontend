import { useQuery } from 'react-query';
import axios from 'axios';

const fetchHighestDonor = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/v11/Donations/highest');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching highest donor: ' + error.message);
  }
};

const useGetHighestDonor = () => {
  return useQuery('highestDonor', fetchHighestDonor);
};

export default useGetHighestDonor;
