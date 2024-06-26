import { useMutation } from "react-query";
import axios from "axios";

const registerUser = async (data) => {
  console.log("Registering user:", data);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/register",
      data
    );
    console.log("Registration successful:", response.data);

    return response.data; 
  } catch (error) {
    console.error("Registration failed:", error);
    throw error.response?.data?.error || "Registration failed";
  }
};

export const useUserRegister = () => {
  return useMutation(registerUser, {
    onSuccess: (data) => {
      console.log("Successfully registered:", data);
  
      localStorage.setItem('role', data.role); 
     
    },
    onError: (error) => {
      console.error("Registration error:", error);
      
    },
  });
};
