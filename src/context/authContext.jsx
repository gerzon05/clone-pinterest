import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const authcontext = createContext();

export const useAuth = () => {
  const context = useContext(authcontext);
  if (!context) throw new Error("there is no auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
  };
  const loginwhithgoogle = () => {
    const googleprovide = new GoogleAuthProvider()
    return signInWithPopup(auth,googleprovide)
  }
  const loginwhithfacebook = () => {
    const facebookprovide = new FacebookAuthProvider()
    return signInWithPopup(auth,facebookprovide)
  }
  useEffect(() => {
    const unsubscrite = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscrite();
  }, []);

  return (
    <authcontext.Provider value={{ signup, login, user, logout, loading, loginwhithgoogle,loginwhithfacebook }}>
      {children}
    </authcontext.Provider>
  );
}
