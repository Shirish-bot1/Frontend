
import { useQuery } from "react-query"; 
import axios from "axios";

const fetchBooks = async () => {
  try {
    const response = await axios({
      url: "http://localhost:5000/api/v2/books/",
      method: "GET",
    });
    console.log("response",response?.data);
    return response?.data;
  } catch (error) {
    console.error("Something went wrong", error);
    throw new Error("Failed to fetch users");
  }
};

  const useGetbooks = () => {
  return useQuery("allbooks", fetchBooks); 
};
 
 export {useGetbooks}
