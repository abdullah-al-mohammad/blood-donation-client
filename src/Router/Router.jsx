import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Dashboard from "../layout/dashboard/Dashboard";
import Profile from "../pages/dashboard/profile/profile/Profile";
import { UpdateProfile } from "../pages/dashboard/profile/updateProfile/UpdateProfile";
import DonorDashBoard from "../pages/dashboard/donor/DonorDashBoard";
import MyDonationRequestPage from "../pages/dashboard/donor/MyDonationRequestPage";
import CreateDonationRequest from "../pages/dashboard/donor/CreateDonationRequest";
import UpdateDonation from "../pages/dashboard/donor/UpdateDonation";
import AdminHome from "../pages/dashboard/Admin/AdminHome";
import AllUsersPage from "../pages/dashboard/Admin/AllUsersPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllBloodDonationPage from "../pages/dashboard/Admin/AllBloodDonationPage";
import ContentManagementPage from "../pages/dashboard/Admin/ContentManagementPage";
import CreateContentManagement from "../pages/dashboard/Admin/CreateContentManagement";
import UpdateContent from "../pages/dashboard/Admin/UpdateContent";
import DonorRoute from "./DonorRoute";
import AllBloodDonation from "../pages/dashboard/volunteer/AllBloodDonation";
import CreateContent from "../pages/dashboard/volunteer/CreateContent";
import VolunteerHome from "../pages/dashboard/volunteer/VolunteerHome";
import Home from "../pages/Home/Home/Home";
import Search from "../pages/SearchPage/Search";
import BloodDonationRequest from "../pages/Home/bloodDonorRequest/BloodDonationRequest";
import BloodDonationRequestDetails from "../pages/Home/bloodDonationRequestDetails/BloodDonationRequestDetails";
import Blog from "../pages/Blogs/Blog";
import BlogDetails from "../pages/Blogs/BlogDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'search',
        element: <Search></Search>
      },
      {
        path: 'donation',
        element: <BloodDonationRequest></BloodDonationRequest>
      },
      {
        path: 'donationDetails/:id',
        element: <BloodDonationRequestDetails></BloodDonationRequestDetails>,
        loader: ({ params }) => fetch(`http://localhost:5173/donations/${params.id}`)
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'details/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5173/blogs/${params.id}`)
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'updateProfile/:id',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5173/users/${params.id}`)
      },
      // donor page route
      {
        path: 'dashboardHome',
        element: <DonorRoute><DonorDashBoard></DonorDashBoard></DonorRoute>
      },
      {
        path: 'myPage',
        element: <DonorRoute><MyDonationRequestPage></MyDonationRequestPage></DonorRoute>
      },
      {
        path: 'createDonationRequest',
        element: <CreateDonationRequest></CreateDonationRequest>
      },
      {
        path: 'updateDonationRequest/:id',
        element: <DonorRoute><UpdateDonation></UpdateDonation></DonorRoute>,
        loader: ({ params }) => fetch(`http://localhost:5173/donations/${params.id}`)
      },
      // Admin route page
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsersPage></AllUsersPage></AdminRoute>
      },
      {
        path: "allDonationPage",
        element: <AdminRoute><AllBloodDonationPage></AllBloodDonationPage></AdminRoute>
      },
      {
        path: "contentManagement",
        element: <AdminRoute><ContentManagementPage></ContentManagementPage></AdminRoute>
      },
      {
        path: "CreateContent",
        element: <AdminRoute> <CreateContentManagement></CreateContentManagement></AdminRoute>
      },
      {
        path: 'updateContent/:id',
        element: <AdminRoute><UpdateContent></UpdateContent></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5173/blogs/${params.id}`)
      },

      // Volunteer route page
      {
        path: 'volunteerHome',
        element: <VolunteerHome></VolunteerHome>
      },
      {
        path: 'allDonation',
        element: <AllBloodDonation></AllBloodDonation>
      },
      {
        path: "contentCreate",
        element: <CreateContent></CreateContent>
      },
    ]
  }
]);