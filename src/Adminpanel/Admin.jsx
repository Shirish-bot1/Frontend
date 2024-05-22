
import { useUserDetail } from "../api/useUserDetail";
import { UserDelete } from '../api/UserDelete';
import { Userupdate } from "../api/Userupdate";
import { useQueryClient } from 'react-query';

const Admin = () => {
  const { data: users, isLoading, isError } = useUserDetail();
  const queryClient = useQueryClient();

  const { mutate: deleteUser } = UserDelete();
  const { mutate: updateUser } = Userupdate();

  const handleEdit = async (userId) => {
    try {
      const userData = users.find(user => user.id === userId);
      const updatedUsername = prompt('Enter updated username:', userData.username);
      const updatedEmail = prompt('Enter updated email:', userData.email);
      if (!updatedUsername || !updatedEmail) return;
      updateUser({
        userId,
        username: updatedUsername,
        email: updatedEmail,
      });
      queryClient.invalidateQueries('users', userData);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      {isLoading && <div>Loading users...</div>}
      {isError && <div>Error fetching users.</div>}
      {users && users.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleEdit(user.id)}>Edit</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No users found.</div>
      )}
    </div>
  );
};

export default Admin;
