
import { useMutation } from "react-query";
import axios from "axios";
import { useQueryClient } from "react-query";

const deleteBlog = async (blogId) => {
  console.log("Id",blogId)
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v5/blog/${blogId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};

export const useDeleteBlogapi = () => {
  const queryClient = useQueryClient();
  return useMutation((blogId) => deleteBlog(blogId), { 
    onSuccess: (data) => {
      console.log("Successfully deleted blog", data);
      queryClient.invalidateQueries("allblogs");
    },
    onError: (error) => {
      console.error("Error deleting blog", error);
    },
  });
};
