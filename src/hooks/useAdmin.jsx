
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'

const useAdmin = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useAuth()
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    enabled: !loading,
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`)
      console.log(res.data);

      return res.data?.admin
    }
  })
  return [isAdmin, isAdminLoading]
}

export default useAdmin