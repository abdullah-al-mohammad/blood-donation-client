import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex min-h-screen">
        <div className="w-1/5 bg-orange-400 p-4">
          <h1>Dashboard</h1>
          <nav>
            <ul>
                <li><NavLink to= "dashboard/profile"></NavLink></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
