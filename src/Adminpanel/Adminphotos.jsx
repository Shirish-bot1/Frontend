import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchImages, uploadImage, updateImage, deleteImage } from '../api/imageApi/imageApi';

const Adminphotos = () => {
  const queryClient = useQueryClient();
  const { data: images, error, isLoading } = useQuery('images', fetchImages);
  console.log("imagedsagdfahsfdhfashdfhgs",images)

  const createImageMutation = useMutation(uploadImage, {
    onSuccess: () => {
      queryClient.invalidateQueries('images');
    },
  });

  const updateImageMutation = useMutation(updateImage, {
    onSuccess: () => {
      queryClient.invalidateQueries('images');
    },
  });

  const deleteImageMutation = useMutation(deleteImage, {
    onSuccess: () => {
      queryClient.invalidateQueries('images');
    },
  });

  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleCreateImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    createImageMutation.mutate(formData);
    setTitle('');
    setFile(null);
  };

  const handleUpdateImage = async (id) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    updateImageMutation.mutate({ id, formData });
  };

  const handleDeleteImage = async (id) => {
    deleteImageMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="admin-panel">
      <div className="image-list border border-gray-300 rounded-md p-4 mb-6">
        <h2 className="mb-4">All Images</h2>
        <div className="image-table">
          <table className="w-full border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {images.map((image) => (
                <tr key={image.id}>
                  <td className="border border-gray-300 p-2">{image.id}</td>
                  <td className="border border-gray-300 p-2"><img src={`http://localhost:5000${image.url}`} alt={image.title} width="100" /></td>
                  <td className="border border-gray-300 p-2">{image.title}</td>
                  <td className="border border-gray-300 p-2">
                    <button onClick={() => handleUpdateImage(image.id)} className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2">Update</button>
                    <button onClick={() => handleDeleteImage(image.id)} className="bg-red-500 text-white px-4 py-1 rounded-md">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="create-image">
        <h2 className="mb-4">Upload Image</h2>
        <div className="image-form border border-gray-300 rounded-md p-4">
          <form onSubmit={handleCreateImage}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 mr-3 w-full mb-2"
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="border border-gray-300 rounded-md px-3 py-1 mr-3 w-full mb-2"
            />
            <button type="sbmit" className="bg-blue-500 text-white px-4 py-1 rounded-md">Upload Image</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adminphotos;
