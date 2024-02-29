import React, { useState, useEffect } from 'react'
import { Header2 } from './Header2'
import { Buttonperfil } from './editarperfil/Buttonperfil'
import { useAuth } from '../context/authContext'
import { app } from '../firebase/firebase'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'

const db = getFirestore(app)

export const EditarPerfil = (props) => {
  const { user } = useAuth()
  const text = user.displayName || 'usuario apellidousuario'
  const email = user.email
  const [save, setSave] = useState('')
  const [nombre, setNombre] = useState(text.split(' ')[0])
  const [apellido, setApellido] = useState(text.split(' ')[1])
  const [web, setWeb] = useState('')
  const [nameuser, setNameuser] = useState(email.split('@')[0])
  const [info, setInfo] = useState('')
  const [infomostrar, setInfoMostrar] = useState([])

  const saveinfo = async (event) => {
    event.preventDefault()
    const info = event.target.info.value
    const newimage = {
      nombre,
      apellido,
      info,
      web,
      nameuser,
    }
    console.log(newimage)
    // guardar informacion
    try {
      await addDoc(collection(db, email.split('@')[0]), {
        ...newimage,
      })
      setSave('su informacion se guardo con exito')
    } catch (error) {
      setSave('hubo un error al guardar su informacion' + error)
    }

    setNombre('')
    setApellido('')
    setWeb('')
    setNameuser('')
    event.target.info.value = ''
    setSave('')
  }

  const handlechangename = (event) => {
    setNombre(event.target.value)
  }
  const handlechangefirsname = (event) => {
    setApellido(event.target.value)
  }
  const handlechangeweb = (event) => {
    setWeb(event.target.value)
  }
  const handlechangeusername = (event) => {
    setNameuser(event.target.value)
  }

  return (
    <>
      <Header2 />
      <div className='my-16 flex'>
        <section className='py-14 px-5 flex flex-col w-1/4 gap-2'>
          <Buttonperfil value='Editar Perfil' />
          <Buttonperfil value='Gestión de la cuenta' />
          <Buttonperfil value='Visivilidad del perfil' />
          <Buttonperfil value='Optimiza tu feed de inicio' />
          <Buttonperfil value='Cuentas conetadas' />
          <Buttonperfil value='Permisos sociales' />
          <Buttonperfil value='Notificaciones' />
          <Buttonperfil value='Privacidad y datos' />
          <Buttonperfil value='Seguridad' />
          <Buttonperfil value='Contenido de la marca' />
        </section>
        <section className='p-14'>
          <h2 className='text-3xl font-semibold'>Editar Perfil</h2>
          <p className='w-[295px] sm:w-[488px] mt-3'>
            Mantén la privacidad de tus datos personales. Cualquier usuario que
            pueda ver tu perfil puede ver la información que añades aquí.
          </p>
          <article className="mt-4 py-7 flex gap-7 items-center relative after:content-['foto'] after:absolute after:top-0 after:left-0">
            <img
              src={
                user.photoURL ||
                'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'
              }
              className='w-14 h-14 rounded-full object-cover'
            />
            <button className='p-2 h-[90%] text-base font-medium rounded-full bg-slate-200'>
              Modificar
            </button>
          </article>
          <form className='mb-[100px]' onSubmit={saveinfo}>
            <div className='flex gap-3 flex-wrap'>
              <section className='flex flex-col gap-2'>
                <label className='text-xs'>Nombre</label>
                <input
                  type='text'
                  id='nombre'
                  className='border-2 rounded-2xl border-gray-400'
                  value={'' || nombre}
                  onChange={handlechangename}
                />
              </section>
              <section className='flex flex-col gap-2'>
                <label className='text-xs'>Apellido</label>
                <input
                  type='text'
                  id='apellido'
                  className='border-2 rounded-2xl border-gray-400'
                  value={'' || apellido}
                  onChange={handlechangefirsname}
                />
              </section>
            </div>
            <div className='flex flex-col gap-2 mt-7'>
              <label className='text-xs'>info</label>
              <textarea
                id='info'
                className='border-2 rounded-2xl h-24 border-gray-400 resize-none'
                placeholder='cuenta tu historia'
              ></textarea>
            </div>
            <div className='flex flex-col gap-2 mt-7'>
              <label className='text-xs'>sitio web</label>
              <input
                type='url'
                id='web'
                className='border-2 rounded-2xl border-gray-400 resize-none'
                placeholder='Añade un enlace para impulser en tráfico a tu sitio'
                onChange={handlechangeweb}
              />
            </div>
            <div className='flex flex-col gap-2 mt-7'>
              <label className='text-xs'>nombre de usuario</label>
              <input
                type='text'
                id='nameuser'
                className='border-2 rounded-2xl border-gray-400 resize-none'
                value={nameuser}
                onChange={handlechangeusername}
              />
              <div className='text-xs'>www.pinterest.com/{nameuser}</div>
              <p>{save}</p>
            </div>
            <div className='fixed left-0 flex justify-center items-center gap-3 bottom-0 w-full p-5 bg-white'>
              <button className='bg-slate-200 rounded-full border-0 font-semibold px-3 py-2 text-lg'>
                Restablecer
              </button>
              <button className='bg-red-700 text-white rounded-full border-0 font-semibold px-3 py-2 text-lg'>
                Guardar
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
