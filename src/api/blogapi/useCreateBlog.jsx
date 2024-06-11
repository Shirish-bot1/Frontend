import { useMutation } from "react-query";
import axios from "axios";

const uploadblog = async (data) => {
  const formData = new FormData();
  formData.append('title', data.get('title'));
  formData.append('content',data.get('content'));
  formData.append('file', data.get('file')); 

  try {
    const response = await axios({
      url: "http://localhost:5000/api/v5/blog",
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

export const useCreateBlog = () => {
  return useMutation(uploadblog, {
    onSuccess: (data) => {
      console.log("Successfully uploaded file", data);
    },
    onError: (error) => {
      console.error("Something went wrong", error);
    },
  });
};
