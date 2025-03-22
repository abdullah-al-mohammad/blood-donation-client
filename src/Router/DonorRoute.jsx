import React from 'react'
import { useDonor } from '../hooks/useDonor'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const DonorRoute = ({ children }) => {
  const [isDonor, isAdminLoading] = useDonor()
  const { user, loading } = useAuth()

  if (loading && isAdminLoading) {
    return <progress className="progress w-56"></progress>
  }
  if (user && isDonor) {
    return children
  }
  return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
}

export default DonorRoute