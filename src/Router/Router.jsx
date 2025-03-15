import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Dashboard from "../layout/dashboard/Dashboard";
import Profile from "../pages/dashboard/profile/profile/Profile";
// import { UpdateProfile } from "../pages/dashboard/profile/updateProfile/UpdateProfile";



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
      // {
      //   path: 'updateProfile/:id',
      //   element: <UpdateProfile></UpdateProfile>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
      // }
    ]
  }
]);