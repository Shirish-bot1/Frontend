import React from 'react';
import { useGetHomePhotos,useDeleteHomePhoto } from '../api/homepageapi/useUpdateHomePhoto';

const Adminhome = () => {
  const { data: photos, isLoading, isError, error } = useGetHomePhotos();
  const { mutate: deletePhoto } = useDeleteHomePhoto();

  const handleDelete = async (id) => {
    try {
      await deletePhoto(id);
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  if (isLoading) return <div className="mt-8 text-center">Loading...</div>;
  if (isError) return <div className="mt-8 text-center">Error: {error.message}</div>;

  return (
    <div className="container flex justify-center p-4 mx-auto">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="mb-6 text-2xl font-bold text-center">Home Photos</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.id} className="relative overflow-hidden bg-white rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1">
                <img src={`http://localhost:5000${photo.url}`} alt={photo.title} className="object-cover w-full h-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="mb-2 text-lg font-semibold">{photo.title}</p>
                  <button
                    onClick={() => handleDelete(photo.id)}
                    className="px-4 py-2 text-black bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adminhome;



