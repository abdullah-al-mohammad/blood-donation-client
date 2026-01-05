import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const VolunteerRout = ({ children }) => {
  const { role } = useRole();
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }
  if (user && role === 'volunteer') {
    return children;
  }
  return <Navigate to={'/login'} state={{ from: location }} replace />;
};

export default VolunteerRout;
