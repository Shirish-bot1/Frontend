// src/hooks/useText.js
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createText,deleteText,fetchTextById,updateText,getAllTexts } from './textApi';
export const useCreateText = () => {
  const queryClient = useQueryClient();
  return useMutation(createText, {
    onSuccess: () => {
      queryClient.invalidateQueries('texts');
    },
    onError: (error) => {
      console.error("Create text error:", error);
    },
  });
};

export const useDeleteText = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteText, {
    onSuccess: () => {
      queryClient.invalidateQueries('texts');
    },
    onError: (error) => {
      console.error("Delete text error:", error);
    },
  });
};

export const useText = (id) => {
  return useQuery(['text', id], () => fetchTextById(id), {
    onError: (error) => {
      console.error("Fetch text error:", error);
    },
  });
};

export const useUpdateText = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, content }) => updateText(id, content), {
    onSuccess: () => {
      queryClient.invalidateQueries('texts');
    },
    onError: (error) => {
      console.error("Update text error:", error);
    },
  });
};
export const useAllTexts = () => {
  return useQuery('allTexts', getAllTexts, {
    onError: (error) => {
      console.error('Fetch all texts error:', error);
    },
  });
};
