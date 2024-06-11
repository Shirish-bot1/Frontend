import React, { useState } from 'react';
import { useCreateHomePhoto } from '../api/homepageapi/useUpdateHomePhoto';

const Admincreatephotohome = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const { mutate: createPhoto, isLoading, isError, error } = useCreateHomePhoto();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    try {
      await createPhoto(formData);
  
    } catch (error) {
      console.error('Error creating photo:', error);
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-bold text-center">Create Home Photo</h1>
      {isError && <div className="mb-4 text-red-500">Error: {error.message}</div>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
          className="mb-4"
        />
        <button 
          type="submit" 
          disabled={isLoading} 
          className={`bg-blue-500 text-black px-4 py-2 rounded-md ${isLoading && 'opacity-50 cursor-not-allowed'}`}
        >
          {isLoading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default Admincreatephotohome;
