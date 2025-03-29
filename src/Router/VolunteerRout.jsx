import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import useVolunteer from '../hooks/useVolunteer'

const VolunteerRout = () => {
  const [isVolunteer, isAdminLoading] = useVolunteer()
  const { user, loading } = useAuth()

  if (loading && isAdminLoading) {
    return <div className='flex justify-center items-center h-screen'>
      <progress className="loading loading-spinner loading-xl"></progress>
    </div>
  }
  if (user && isVolunteer) {
    return children
  }
  return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
}

export default VolunteerRout