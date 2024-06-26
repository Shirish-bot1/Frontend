import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authenticator';

const drawerWidth = 240;

function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      <div className={`w-${drawerWidth} bg-white border-r border-gray-200 flex flex-col`}>
        <div className="p-4 border-b border-gray-200 bg-gray-800 text-white">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/admin')}>Admin Panel</button>
            </li>
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/adminbook')}>Book Handle</button>
            </li>
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/Adminblog')}>About Us Handle</button>
            </li>
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/AdminText')}>News handle</button>
            </li>
           
          
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/AdminDonationpay')}>Donations payments</button>
            </li>
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/Donatestat')}>Donations Info</button>
            </li>
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/AdminHome')}>Homepage</button>
            </li>
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/AdminHomecreate')}>Homepage create</button>
            </li>
            <li>
              <button className="text-gray-800 w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200" onClick={() => handleNavigation('/AdminHometext')}>Homepage text</button>
            </li>
          </ul>
        </div>
        <button className="text-gray-800 py-2 px-4 rounded-md bg-red-500 hover:bg-red-600" onClick={handleLogout}>Logout</button>
      </div>
      
    </div>
  );
}



export { AdminDashboard };
