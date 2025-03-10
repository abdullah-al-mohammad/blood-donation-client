import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Register from "../pages/register/Register";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
  ]);