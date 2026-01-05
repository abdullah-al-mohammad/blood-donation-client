// layout/DashboardRedirect.jsx
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useRole from '../hooks/useRole';

const DashboardRedirect = () => {
  const location = useLocation();
  // const { loading } = useAuth();
  // const [isAdmin, adminLoading] = useAdmin();
  // const [isDonor, donorLoading] = useDonor();
  // const [isVolunteer, volunteerLoading] = useVolunteer();
  const { role, isLoading } = useRole();

  if (isLoading) {
    return null; // or spinner
  }
  // ✅ Only redirect when visiting /dashboard exactly
  if (location.pathname === '/dashboard') {
    if (role === 'admin') return <Navigate to="/dashboard/admin" replace />;
    if (role === 'donor') return <Navigate to="/dashboard/donor" replace />;
    if (role === 'volunteer') return <Navigate to="/dashboard/volunteer" replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default DashboardRedirect;
