import { Link } from "react-router-dom";
import useUsersProfile from "../../../../hooks/useUsersProfile"
import { ProfileTable } from "../profileTable/ProfileTable";
import useAuth from "../../../../hooks/useAuth";


const Profile = () => {
  const [users, loading, refetch] = useUsersProfile()
  const { user } = useAuth()
  if (loading) {
    return <div className='flex justify-center items-center h-screen'>
      <progress className="loading loading-ring loading-xl"></progress>
    </div>
  }

  return (
    <div>
      <div className="adminBG">
        <h1 className="text-center font-bold text-3xl uppercase p-5 font-sans" data-aos="flip-right">
          Welcome {user?.displayName}
        </h1>
      </div>
      <div className="adminBannerBG">
        <h1 className="capitalize text-2xl md:text-4xl text-center mb-5">profile users</h1>
        <div className="text-center">
          <Link to={'/'}><button>Home</button></Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-[#ef3d32]">admin</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Blood Group</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <ProfileTable key={user._id} user={user}></ProfileTable>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Profile
