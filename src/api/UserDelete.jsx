import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const delUser = async (id) => {
  console.log("id", id);
  try {
    const response = await axios.delete(`http://localhost:5000/api/v1/admin/users/${id}`);
    console.log("Deleted succesflully", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error(error?.response?.data || "Something went wrong");
  }
};

   export const UserDelete = () => {
    const queryClient = useQueryClient();
     return useMutation((id) => delUser(id),{
        onSuccess: (data) => {
            console.log("User deleted successfully:", data);
            queryClient.invalidateQueries("allusers");
        },
        onError: (error) => {
            console.error("Error deleting user:", error);
        },
    });
    

};

