import useUsersProfile from "../../../../hooks/useUsersProfile"
import { ProfileTable } from "../profileTable/ProfileTable";


const Profile = () => {
  const [users, loading, refetch] = useUsersProfile()


  return (
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
  )
}

export default Profile
