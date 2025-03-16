
import { NavLink, Outlet } from "react-router-dom";
const DashBoardHome = () => {
  return (
    <div>
    <div className="flex min-h-screen">
      <div className="w-1/5 bg-orange-200 p-4">
        <nav>
          <ul>
            <li className="text-black"><NavLink to="dashboardHome">Home</NavLink></li>
            <li className="text-black"><NavLink to="myPage">My Donation Request Page</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="p-4 w-full shadow-2xl">
        <Outlet></Outlet>
      </div>
    </div>
  </div>
  )
}

export default DashBoardHome
