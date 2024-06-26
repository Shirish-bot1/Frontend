// Import necessary modules and models
import { useMutation } from "react-query";
import axios from "axios";
import { useQueryClient } from "react-query";

const deleteBook = async (bookId) => {
  console.log("Id",bookId);
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v2/books/${bookId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  return useMutation((bookId) => deleteBook(bookId), { 
    onSuccess: (data) => {
      console.log("Successfully deleted book", data);
      queryClient.invalidateQueries("allbooks");
    },
    onError: (error) => {
      console.error("Error deleting book", error);
    },
  });
};
