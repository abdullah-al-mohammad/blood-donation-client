import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";
import useAdmin from "../../hooks/useAdmin";
import { useDonor } from "../../hooks/useDonor";
import useVolunteer from "../../hooks/useVolunteer";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isDonor] = useDonor()
  const [isVolunteer] = useVolunteer()
  return (
    <div>
      <div className="flex">
        <div className="w-64 min-h-screen bg-red-500">
          <nav>
            <ul className="p-4 menu">
              <li className="text-black"><NavLink to="profile"><FaUser></FaUser><span>Profile</span></NavLink></li>
              <div className="divider divider-success">****</div>
              <li className="text-black"><NavLink to="/dashboard/createDonationRequest"><BiSolidDonateBlood /><span>Donation Request</span></NavLink></li>
              {
                isDonor && <>
                  <li className="text-black"><NavLink to="/dashboard/dashboardHome"><FaHome></FaHome><span>Donor Home</span></NavLink></li>
                  <li className="text-black"><NavLink to="/dashboard/myPage"><MdBloodtype /><span>My Donation Page</span></NavLink></li>
                  {/* <li className="text-black"><NavLink to="/dashboard/createDonationRequest"><BiSolidDonateBlood />Donation Request</NavLink></li> */}
                </>}
              {isAdmin && <>
                <li className="text-black"><NavLink to="/dashboard/adminHome"><FaHome></FaHome><span>Admin Home</span></NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/allUsers"><FaUser></FaUser><span>All Users</span></NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/allDonationPage"><BiSolidDonateBlood /><span>All Donation</span></NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/contentManagement"><BiBookContent /><span>Content Management</span></NavLink></li>
              </>}
              {isVolunteer && <>
                <li className="text-black"><NavLink to="/dashboard/volunteerHome"><FaHome></FaHome><span>Volunteer Home</span></NavLink></li>
                <li className="text-black"><NavLink to="/dashboard/allDonation"><BiSolidDonateBlood /><span>All Donation Page</span></NavLink></li>
              </>}
            </ul>
          </nav>
        </div>
        <div className="p-4 w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div >
  );
};

export default Dashboard;
