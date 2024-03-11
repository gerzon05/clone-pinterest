// import React, { useState } from 'react'
// import { Header2 } from './Header2'
// import { useAuth } from '../context/authContext'
// import { app } from '../firebase/firebase'
// import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// const db = getFirestore(app)
// const storage = getStorage(app)

// export const SavePin = () => {
//   const [cargueimg, setCargueImg] = useState('')

//   const { user } = useAuth()
//   let Urlimg
//   const saveinfo = async (event) => {
//     event.preventDefault()
//     const titulo = event.target.titulo.value
//     const descripcionimg = event.target.descripcionimg.value
//     const enlace = event.target.enlace.value
//     const categoria = event.target.categoria.value
//     const newimage = {
//       titulo: titulo,
//       descripcionimg: descripcionimg,
//       enlace: enlace,
//       categoria: categoria,
//       imagen: Urlimg,
//     }
//     //guardar informacion
//     try {
//       await addDoc(collection(db, categoria), {
//         ...newimage,
//       })
//       setCargueImg('su imagen se guardo con exito')
//     } catch (error) {
//       setCargueImg('hubo un error al subir la imagen' + error)
//     }
//     try {
//       await addDoc(collection(db, 'imagenes'), {
//         ...newimage,
//       })
//       setCargueImg('su imagen se guardo con exito')
//     } catch (error) {
//       setCargueImg('hubo un error al subir la imagen' + error)
//     }
//     event.target.titulo.value = ''
//     event.target.descripcionimg.value = ''
//     event.target.enlace.value = ''
//     event.target.categoria.value = ''
//     event.target.file.value = ''
//   }
//   const handleFile = async (event) => {
//     const archivoimg = event.target.files[0]
//     const refImg = ref(storage, `imagenes/${archivoimg.name}`)
//     await uploadBytes(refImg, archivoimg)
//     Urlimg = await getDownloadURL(refImg)
//   }
//   return (
//     <>
//       <Header2 />
//       <main className='bg-slate-300 p-12 flex justify-center mt-16'>
//         <div className='bg-white rounded-2xl max-w-4xl p-8'>
//           <section>
//             <form onSubmit={saveinfo}>
//               <div className='flex justify-between py-3'>
//                 <h3>{cargueimg}</h3>
//                 <button className='rounded-lg bg-red-700 px-6 py-3 text-xl text-white'>
//                   Guardar
//                 </button>
//               </div>
//               <div className='flex justify-center items-center flex-wrap'>
//                 <section className='w-80 flex justify-center items-center flex-col gap-2'>
//                   <div className='w-full h-96 rounded-3xl bg-slate-400 flex justify-center items-center '>
//                     <input
//                       type='file'
//                       id='file'
//                       placeholder='agregar imagen'
//                       className='rounded-3xl text-sm'
//                       onChange={handleFile}
//                     />
//                   </div>
//                   <button className='w-full rounded-3xl py-2 bg-slate-400'>
//                     Guardar desde el sitio
//                   </button>
//                 </section>
//                 <section className='w-80 p-2 flex flex-col gap-9'>
//                   <div>
//                     <input
//                       id='titulo'
//                       type='text'
//                       className='w-full border-0 text-4xl'
//                       placeholder='Añade un titulo'
//                       required
//                     />
//                     <hr className='bg-black h-px' />
//                   </div>
//                   <figure className='flex items-center gap-3'>
//                     <img
//                       src={
//                         user.photoURL ||
//                         'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'
//                       }
//                       alt='foto de perfil'
//                       className='w-8 h-8 rounded-full object-cover'
//                     />
//                     <span>
//                       <h2>{user.displayName || user.email}</h2>
//                     </span>
//                   </figure>
//                   <figure>
//                     <input
//                       id='descripcionimg'
//                       type='text'
//                       className='w-full border-0 text-1xl'
//                       placeholder='Indica en que consiste tu pin'
//                     />
//                     <hr className='bg-black h-px' />
//                   </figure>
//                   <figure>
//                     <input
//                       id='enlace'
//                       type='text'
//                       className='w-full border-0 text-1xl'
//                       placeholder='Añade un enlace de destino'
//                     />
//                     <hr className='bg-black h-px' />
//                   </figure>
//                   <figure>
//                     <input
//                       required
//                       id='categoria'
//                       type='text'
//                       className='w-full border-0 text-1xl'
//                       placeholder='añade la categoria de tu pin'
//                     />
//                     <hr className='bg-black h-px' />
//                   </figure>
//                 </section>
//               </div>
//             </form>
//           </section>
//         </div>
//       </main>
//     </>
//   )
// }
