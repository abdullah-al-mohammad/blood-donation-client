import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import useVolunteer from '../hooks/useVolunteer'

const VolunteerRout = () => {
  const [isVolunteer, isAdminLoading] = useVolunteer()
  const { user, loading } = useAuth()

  if (loading && isAdminLoading) {
    return <progress className="progress w-56"></progress>
  }
  if (user && isVolunteer) {
    return children
  }
  return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
}

export default VolunteerRout