import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const AdminRoute = ({ children }) => {
  const { role } = useRole();
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return null;
  }
  if (role === 'admin' && user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
