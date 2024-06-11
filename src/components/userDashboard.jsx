import React from 'react';
import { useAuth } from '../Authenticator';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate  = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        {/* Your dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold mb-2">Profile</h2>
            <p className="text-gray-600">User profile information</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold mb-2">Books</h2>
            <p className="text-gray-600">Books available for the user</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="text-gray-600">Information about the user</p>
          </div>
          <button onClick={handleLogout}>Logout</button> 
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
