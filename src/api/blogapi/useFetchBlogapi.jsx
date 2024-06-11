
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchBlog = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/v5/blog`);
    console.log("response",response.data);
    return response?.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw new Error("Failed to fetch blog");
  }
};

export const useFetchBlogapi = () => {
  return useQuery("allblogs",fetchBlog);
};

  