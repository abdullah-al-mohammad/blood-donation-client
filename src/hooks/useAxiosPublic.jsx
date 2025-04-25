import axios from 'axios'


const axiosPublic = axios.create({
  baseURL: 'https://blood-donation-77604.web.app'
})
const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic
