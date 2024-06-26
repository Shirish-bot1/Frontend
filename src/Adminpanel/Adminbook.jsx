import React, { useState } from 'react';
import { useGetbooks } from '../api/useGetbooks';
import { useCreateBook } from '../api/useCreateBook';
import { useDeleteBook } from '../api/useDeletebook';
import { useQueryClient } from 'react-query';
import { Bookupdate } from '../api/updateBookapi';

const Adminbook = () => {
  const { data: books, isLoading, isError } = useGetbooks();
  const {mutate:createBookMutation} = useCreateBook();
  const { mutate: deleteBookMutation } = useDeleteBook();
  const { mutate: updateBookMutation } = Bookupdate();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleCreateBook = (e) => {
    e.preventDefault();
    const newBookFormData = new FormData();
    newBookFormData.append('title', formData.title);
    newBookFormData.append('author', formData.author);
    newBookFormData.append('file', formData.file);

    createBookMutation(newBookFormData, {
      onSuccess: () => {
        queryClient.invalidateQueries('allbooks');
        setFormData({ title: '', author: '', file: null });
      },
    });
  };

  const handleDeleteClick = (bookId) => {
    deleteBookMutation(bookId, {
      onSuccess: () => queryClient.invalidateQueries('allbooks'),
    });
  };

  const handleUpdateBook = (e, bookId) => {
    e.preventDefault();
    console.log("e",e)
    const updateFormData = new FormData(e.target);
    const updateData = {
      bookId,
      title: updateFormData.get('title'),
      author: updateFormData.get('author'),
      file: updateFormData.get('file'),
    };
    updateBookMutation(updateData, {
      onSuccess: () => queryClient.invalidateQueries('allbooks'),
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching books</div>;

  return (
    <div className="admin-panel">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <form onSubmit={handleCreateBook} className="mb-6">
        <div className="mb-4">
          <label className="block mb-2">Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleInputChange} required className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">File:</label>
          <input type="file" name="file" onChange={handleFileChange} required className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Add Book
        </button>
      </form>
      <div className="book-list">
        <h3 className="text-xl font-bold mb-4">Books</h3>
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3 px-4">Title</th>
              <th className="text-left py-3 px-4">Author</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="border px-4 py-2">
                <td className="border px-4 py-2">{book.title}</td>
                </td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    onClick={() => handleDeleteClick(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminbook;
