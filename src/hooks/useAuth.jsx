import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
// import {AuthContext} from "../provider/AuthProvider.jsx"
const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth