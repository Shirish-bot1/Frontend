
import { useGetbooks } from "../api/useGetbooks";

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
      <h2 className="text-2xl font-bold mb-4">Book List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map(book => (
              <tr key={book.id}>
                <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={`http://localhost:5000${book.url}`} className="inline-block bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out" download   target="_blank" 
                    rel="noopener noreferrer">Download PDF</a>
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
