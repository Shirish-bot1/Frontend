import { Route, Navigate } from 'react-router-dom';
import { ROLES } from './ROLES';

const PrivateRoute = ({ element, ...props }) => {
  const userRole = localStorage.getItem('role'); 


  if (!userRole) {
    return <Navigate to="/login" />;
  }

  // Check if user is admin
  const isAdmin = userRole === ROLES.ADMIN;

  // Redirect to admin or user dashboard based on role
  if (isAdmin) {
    return <Navigate to="/AdminDashboard" />;
  } else {
    return <Navigate to="/useDashboard" />;
  }
};

export default PrivateRoute;
