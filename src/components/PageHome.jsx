import React from 'react'
import { useAuth } from '../context/authContext'

export const PageHome = () => {
  const {user, loading, logout }= useAuth()

  const handlelogout = () =>{
    logout()
  }

  if (loading) return <h2>loading</h2>
  
  return (
    <>
      <div>Bienvenido {user.displayName || user.email}</div>
      <button onClick={handlelogout}>logout</button>
    </>
  )
}
