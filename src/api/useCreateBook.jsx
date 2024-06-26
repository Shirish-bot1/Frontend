import { useMutation } from "react-query";
import axios from "axios";

const uploadFile = async (data) => {
  const formData = new FormData();
  formData.append('title', data.get('title'));
  formData.append('author', data.get('author'));
  formData.append('file', data.get('file'));  // Correct field name for the file

  try {
    const response = await axios({
      url: "http://localhost:5000/api/v2/books",
      data: formData,
      method: 'POST',
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Response:", response);
    return response?.data;
  } catch (err) {
    console.error("Something went wrong", err);
    throw new Error(err?.response?.data);
  }
};

export const useCreateBook = () => {
  return useMutation(uploadFile, {
    onSuccess: (data) => {
      console.log("Successfully uploaded file", data);
    },
    onError: (error) => {
      console.error("Something went wrong", error);
    },
  });
};
