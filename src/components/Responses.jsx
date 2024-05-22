
import { useParams } from 'react-router-dom';
import { useGetcomId } from '../api/complainApi/useGetcomId';

const Responses = () => {
  const { complainId } = useParams();
  const { data: complaints, isLoading, isError, error } = useGetcomId(complainId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Complaint Submitted Successfully</h2>
      <table className="min-w-full bg-white">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Name:</td>
            <td className="border px-4 py-2">{complaints.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Phone:</td>
            <td className="border px-4 py-2">{complaints.phone}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Address:</td>
            <td className="border px-4 py-2">{complaints.address}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Age:</td>
            <td className="border px-4 py-2">{complaints.age}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Sex:</td>
            <td className="border px-4 py-2">{complaints.sex}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Details:</td>
            <td className="border px-4 py-2">{complaints.details}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 text-green-500">Your complaint has been successfully submitted and will be addressed soon.</p>
    </div>
  );
};

export default Responses;
