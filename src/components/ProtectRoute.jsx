// import { Navigate } from 'react-router-dom'
// import { useAuth } from '../context/authContext'
// import { AiOutlineLoading } from 'react-icons/Ai'

// export const ProtectRoute = ({ children }) => {
//   const { user, loading } = useAuth()

//   if (loading)
//     return (
//       <div className='absolute left-1/2 top-1/2 translate-[-50%,-50%]'>
//         <AiOutlineLoading className='text-3xl font-bold animate-spin' />
//       </div>
//     )
//   if (!user) return <Navigate to='/' />

//   return <>{children}</>
// }
