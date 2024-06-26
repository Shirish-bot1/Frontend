import React from 'react';
import { useGetbooks } from "../api/useGetbooks";
import HeaderNav from '../Navbar/HeaderNav';

const BookList = () => {
  const { data, isLoading, isError } = useGetbooks();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching books</div>;
  }

  return (
  
  

    <div>
        <HeaderNav/>
      <h2 className="text-2xl font-bold mb-4">Book List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-indigo-100">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Author</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Download</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map(book => (
              <tr key={book.id}>
                <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={`http://localhost:5000${book.url}`} target="_blank" rel="noopener noreferrer">{book.title} PDF</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
