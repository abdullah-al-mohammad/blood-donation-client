import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex min-h-screen">
        <div className="w-1/5 bg-orange-200 p-4">
          <nav>
            <ul>
              <li className="text-black"><NavLink to="profile">Profile</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="p-4 w-full shadow-2xl">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
