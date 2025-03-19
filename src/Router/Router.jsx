import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Dashboard from "../layout/dashboard/Dashboard";
import Profile from "../pages/dashboard/profile/profile/Profile";
import { UpdateProfile } from "../pages/dashboard/profile/updateProfile/UpdateProfile";
// import DashBoardHome from "../layout/donorDashboard/DashBoardHome";
import DonorDashBoard from "../pages/dashboard/donor/DonorDashBoard";
import MyDonationRequestPage from "../pages/dashboard/donor/MyDonationRequestPage";
import CreateDonationRequest from "../pages/dashboard/donor/CreateDonationRequest";
import UpdateDonation from "../pages/dashboard/donor/UpdateDonation";
import AdminHome from "../pages/dashboard/Admin/AdminHome";
import AllUsersPage from "../pages/dashboard/Admin/AllUsersPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'updateProfile/:id',
        element: <UpdateProfile></UpdateProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      // donor page route
      {
        path: 'dashboardHome',
        element: <DonorDashBoard></DonorDashBoard>
      },
      {
        path: 'myPage',
        element: <MyDonationRequestPage></MyDonationRequestPage>
      },
      {
        path: 'createDonationRequest',
        element: <CreateDonationRequest></CreateDonationRequest>
      },
      {
        path: 'updateDonationRequest/:id',
        element: <UpdateDonation></UpdateDonation>,
        loader: ({ params }) => fetch(`http://localhost:5000/donations/${params.id}`)
      },
      // Admin route page
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'allUsers',
        element: <AllUsersPage></AllUsersPage>
      }
    ]
  }
]);