import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../auth/login/Login';
import Register from '../auth/register/Register';
import AdminDashboard from '../layout/AdminDashboard';
import DashboardRedirect from '../layout/DashboardRedirect';
import DonorDashboard from '../layout/DonorDashboard';
import Main from '../layout/Public';
import VolunteerDashboard from '../layout/VolunteerDashboard';
import Blog from '../pages/Blogs/Blog';
import BlogDetails from '../pages/Blogs/BlogDetails';
import AdminHomePage from '../pages/dashboard/Admin/AdminHomePage';
import ContentHome from '../pages/dashboard/Admin/ContentHome';
import CreateContentPage from '../pages/dashboard/Admin/CreateContentPage';
import DonationsPage from '../pages/dashboard/Admin/DonationsPage';
import EditContentPage from '../pages/dashboard/Admin/EditContentPage';
import UsersPage from '../pages/dashboard/Admin/UsersPage';
import DonationRequest from '../pages/dashboard/donor/DonationRequest';
import MyDonationRequestPage from '../pages/dashboard/donor/MyDonationRequestPage';
import UpdateDonation from '../pages/dashboard/donor/UpdateDonation';
import Profile from '../pages/dashboard/profile/profile/Profile';
import { UpdateProfile } from '../pages/dashboard/profile/updateProfile/UpdateProfile';
import CreateContent from '../pages/dashboard/volunteer/CreateContent';
import VolunteerHome from '../pages/dashboard/volunteer/VolunteerHome';
import ErrorPage from '../pages/errorPage/ErrorPage';
import DonationsRequest from '../pages/Home/DonationsRequest';
import DonationsRequestDetails from '../pages/Home/DonationsRequestDetails';
import Home from '../pages/Home/Home';
import Search from '../pages/SearchPage/Search';
import SearchResult from '../pages/SearchPage/SearchResult';
import AdminRoute from './AdminRoute';
import DonorRoute from './DonorRoute';
import PrivateRoute from './PrivateRoute';
import VolunteerRout from './VolunteerRout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'search-results',
        element: <SearchResult />,
      },
      {
        path: 'donation',
        element: <DonationsRequest />,
      },
      {
        path: 'donationDetails/:id',
        element: <DonationsRequestDetails />,
        loader: async ({ params }) => await fetch(`http://localhost:5000/donations/${params.id}`),
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'details/:id',
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
      },
    ],
  },
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Outlet />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardRedirect />,
      },
      {
        path: 'donor',
        element: (
          <DonorRoute>
            <DonorDashboard />
          </DonorRoute>
        ),
        children: [
          {
            path: 'donation-request',
            element: <DonationRequest />,
          },
          {
            path: 'myPage',
            element: <MyDonationRequestPage />,
          },
          {
            path: 'updateDonationRequest/:id',
            element: (
              <PrivateRoute>
                <UpdateDonation />
              </PrivateRoute>
            ),
            loader: ({ params }) => fetch(`http://localhost:5000/donations/${params.id}`),
          },
        ],
      },
      {
        path: 'admin',
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
        children: [
          {
            path: 'donation-request',
            element: <DonationRequest />,
          },
          {
            index: true,
            element: <AdminHomePage />,
          },
          {
            path: 'home',
            element: <AdminHomePage />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'updateProfile/:id',
            element: <UpdateProfile />,
            loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
          },
          {
            path: 'users',
            element: <UsersPage />,
          },
          {
            path: 'donations',
            element: <DonationsPage />,
          },
          {
            path: 'content-list',
            element: <ContentHome />,
          },
          {
            path: 'create-content',
            element: <CreateContentPage />,
          },
          {
            path: 'updateContent/:id',
            element: <EditContentPage />,
            loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
          },
        ],
      },
      {
        path: 'volunteer',
        element: (
          <VolunteerRout>
            <VolunteerDashboard />
          </VolunteerRout>
        ),
        children: [
          {
            path: 'home',
            element: <VolunteerHome />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'donation-request',
            element: <DonationRequest />,
          },
          {
            path: 'donations',
            element: <DonationsPage />,
          },
          {
            path: 'content-create',
            element: <CreateContent />,
          },
        ],
      },
    ],
  },
]);
