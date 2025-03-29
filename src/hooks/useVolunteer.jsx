import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'

const useVolunteer = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useAuth()
  const { data: isVolunteer = [], isLoading: isAdminLoading } = useQuery({
    enabled: !loading,
    queryKey: [user?.email, 'isVolunteer'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/volunteer/${user?.email}`)

      return res.data?.volunteer
    }
  })
  return [isVolunteer, isAdminLoading]
}

export default useVolunteer