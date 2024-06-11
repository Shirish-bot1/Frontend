import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteDonation = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/v11/Donations/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting donation: ' + error.message);
  }
};

const useDeleteDonation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDonation, {
    onSuccess: () => {
      queryClient.invalidateQueries('allDonations');
    },
  });
};

export default useDeleteDonation;
