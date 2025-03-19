import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div>
      <div className="flex min-h-screen">
        <div className="w-1/5 bg-orange-200 p-4">
          <nav>
            <ul>
              <li className="text-black"><NavLink to="profile">Profile</NavLink></li>
              <div className="divider divider-success">****</div>
              <>
                <li className="text-black"><NavLink to="/dashboard/dashboardHome"><FaHome></FaHome> Donor Home</NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/myPage"><MdBloodtype /> My Donation Page</NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/createDonationRequest"><BiSolidDonateBlood />Donation Request</NavLink></li>
              </>
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
