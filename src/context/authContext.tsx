import { createContext, useContext } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { ErrorSaveRegister } from '@/store/state'

type complexObjetc = {
  signup?: (email: string, password: string) => void
  login?: (email: string, password: string) => void
  loginwhithgoogle?: () => void
  loginwhithfacebook?: () => void
  logout?: () => void
}

export const authcontext = createContext<complexObjetc | null>(null)

export const useAuth = () => {
  const context = useContext(authcontext)
  if (!context) {
    throw new Error('there is no auth provider')
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { errorcontentregister } = ErrorSaveRegister()

  // const [user, setUser] = useState(null)
  // const [loading, setLoading] = useState(true)

  const signup = async (email: string, password: string) => {
    errorcontentregister('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      errorcontentregister('Se registro correctamente')
    } catch (error: any) {
      if (error.code === 'auth/weak-password') {
        errorcontentregister('la contraseña debe tener mas de 6 caracteres')
      } else if (error.code === 'auth/email-already-in-use') {
        errorcontentregister('el correo ya esta en uso')
      }
    }
  }

  const login = async (email: string, password: string) => {
    errorcontentregister('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        errorcontentregister('Contraseña incorrecta')
      } else if (error.code === 'auth/user-not-found') {
        errorcontentregister('el correo no existe')
      } else if (error.code === 'auth/too-many-requests') {
        errorcontentregister(
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
  // useEffect(() => {
  //   const unsubscrite = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser)
  //     setLoading(false)
  //   })
  //   return () => unsubscrite()
  // }, [])

  return (
    <authcontext.Provider
      value={{
        signup,
        login,
        // user,
        logout,
        // loading,
        loginwhithgoogle,
        loginwhithfacebook,
      }}
    >
      {children}
    </authcontext.Provider>
  )
}
