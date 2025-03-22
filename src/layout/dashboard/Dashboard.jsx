import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";
import useAdmin from "../../hooks/useAdmin";
import { useDonor } from "../../hooks/useDonor";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isDonor] = useDonor()
  return (
    <div>
      <div className="flex min-h-screen">
        <div className="w-1/5 bg-orange-200 p-4">
          <nav>
            <ul>
              <li className="text-black"><NavLink to="profile">Profile</NavLink></li>
              <div className="divider divider-success">****</div>
              {isDonor && <>
                <li className="text-black"><NavLink to="/dashboard/dashboardHome"><FaHome></FaHome> Donor Home</NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/myPage"><MdBloodtype /> My Donation Page</NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/createDonationRequest"><BiSolidDonateBlood />Donation Request</NavLink></li>
              </>}
              {isAdmin && <>
                <li className="text-black"><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/allUsers"><FaUser></FaUser>All Users</NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/allDonationPage"><BiSolidDonateBlood />All Donation</NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/contentManagement"><BiBookContent />Content Management</NavLink></li>
              </>}
              <>
                <li className="text-black"><NavLink to="/dashboard/volunteerHome"><FaHome></FaHome> Volunteer Home</NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/allDonation"><BiSolidDonateBlood /> All Donation Page</NavLink></li>
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
