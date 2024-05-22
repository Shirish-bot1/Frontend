import { useMutation } from "react-query";
import axios from "axios";

 const Register = async (data) => {
  console.log("I am here", data);
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
    // Throw the error to be caught by the calling function or hook
  }
};

export const useUserRegister = () => {
  return useMutation(Register, {
    onSuccess: (data) => {
      console.log("Successfully registered:", data);
      // Handle success, e.g., redirect to another page
    },
    onError: (error) => {
      console.error("Registration error:", error);
      // Handle error, e.g., display error message to the user
    },
  });
};
