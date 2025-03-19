import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "../../firebase.config"
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const axiosPublic = useAxiosPublic()

  // create a function  to handle the register
  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }
  // create a function to handle the login
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // check if the user is logged in
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser => {
      setUser(currentUser)
      setLoading(true)
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser?.email }
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
              setLoading(false)
            }
          })
      } else {
        localStorage.removeItem('access-token')
      }
    }))
    return () => {
      return unsubsCribe()
    }
  }, [])

  const userInfo = {
    user,
    loading,
    registerUser,
    updateUserProfile,
    loginUser
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider