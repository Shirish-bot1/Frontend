
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function AdminDashboard({ children }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="w-[${drawerWidth}px] bg-gray-800 text-white">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>
        <div className="p-4">
          <ul>
            <li className="mb-4">
              <button className="text-white" onClick={() => handleNavigation('/admin')}>Admin Panel</button>
            </li>
            <li className="mb-4">
              <button className="text-white" onClick={() => handleNavigation('/adminbook')}>Book Handle</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-grow p-4 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
}

AdminDashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AdminDashboard };
