import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'

export const useDonor = () => {
  const axiosSecure = useAxiosSecure()
  const { user, loading } = useAuth()
  const { data: isDonor = [], isLoading: isDonorLoading } = useQuery({
    enabled: !loading,
    queryKey: [user?.email, 'isDonor'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/donor/${user?.email}`)

      return res.data?.donor
    }
  })
  return [isDonor, isDonorLoading]
}
