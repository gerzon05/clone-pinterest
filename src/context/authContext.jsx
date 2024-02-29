import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

export const authcontext = createContext()

export const useAuth = () => {
  const context = useContext(authcontext)
  if (!context) throw new Error('there is no auth provider')
  return context
}

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [erroemail, setErrorEmail] = useState('')
  const [erropass, setErrorpass] = useState('')

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signup = async (email, password) => {
    setErrorEmail('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setErrorEmail('Se registro correctamente')
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        setErrorEmail('la contraseña debe tener mas de 6 caracteres')
      } else if (error.code === 'auth/email-already-in-use') {
        setErrorEmail('el correo ya esta en uso')
      }
    }
  }

  const login = async (email, password) => {
    setErrorpass('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/pagehome')
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setErrorpass('Contraseña incorrecta')
      } else if (error.code === 'auth/user-not-found') {
        setErrorpass('el correo no existe')
      } else if (error.code === 'auth/too-many-requests') {
        setErrorpass(
          'tu cuenta se deshabilitado temporalmente, intente mas tarde',
        )
      }
    }
  }

  const logout = () => {
    signOut(auth)
  }

  const loginwhithgoogle = () => {
    const googleprovide = new GoogleAuthProvider()
    return signInWithPopup(auth, googleprovide)
  }
  const loginwhithfacebook = () => {
    const facebookprovide = new FacebookAuthProvider()
    return signInWithPopup(auth, facebookprovide)
  }
  useEffect(() => {
    const unsubscrite = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscrite()
  }, [])

  return (
    <authcontext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginwhithgoogle,
        loginwhithfacebook,
        erroemail,
        erropass,
      }}
    >
      {children}
    </authcontext.Provider>
  )
}
