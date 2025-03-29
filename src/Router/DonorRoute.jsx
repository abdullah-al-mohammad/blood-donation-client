import React from 'react'
import { useDonor } from '../hooks/useDonor'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const DonorRoute = ({ children }) => {
  const [isDonor, isAdminLoading] = useDonor()
  const { user, loading } = useAuth()

  if (loading && isAdminLoading) {
    return <div className='flex justify-center items-center h-screen'>
      <progress className="loading loading-spinner loading-xl"></progress>
    </div>
  }
  if (user && isDonor) {
    return children
  }
  return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
}

export default DonorRoute