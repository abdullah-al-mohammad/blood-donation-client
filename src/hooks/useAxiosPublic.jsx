import axios from 'axios'


const axiosPublic = axios.create({
  baseURL: 'https://blood-donation-server-nu-two.vercel.app'
})
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
