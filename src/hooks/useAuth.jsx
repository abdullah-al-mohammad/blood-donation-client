import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const auth = useContext(AuthContext)
const useAuth = () => {
  return auth
}

export default useAuth