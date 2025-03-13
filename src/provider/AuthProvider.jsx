import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {app} from "../../firebase.config"

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

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
    const unsubsCribe =  onAuthStateChanged(auth, (currentUser => {
      setUser(currentUser)
      setLoading(false)
    }))
    return ()=> {
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