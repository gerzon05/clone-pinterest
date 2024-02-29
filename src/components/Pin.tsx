import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/firebase'
import { AiOutlineEllipsis } from 'react-icons/Ai'
import { FiShare } from 'react-icons/Fi'
import { useAuth } from '../context/authContext'

const db = getFirestore(app)

export const Pin = ({ buscador }) => {
  const { user } = useAuth()
  const [photos, setPhotos] = useState([])
  const [photos2, setPhotos2] = useState([])
  const [popap, setPopap] = useState('', false)

  const handlesaveimg = async (url: string) => {
    const guardar = {
      imgURL: url,
    }
    try {
      await addDoc(collection(db, user.email), {
        ...guardar,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getimg = async () => {
      try {
        const basedatos = await getDocs(collection(db, 'imagenes'))
        const docs = []
        basedatos.forEach((img) => {
          docs.push({ ...img.data(), id: img.id })
        })
        setPhotos(docs)
      } catch (error) {
        console.log(error)
      }
    }
    function filtrar() {
      setPhotos2(
        photos.filter(
          (elem) => elem.categoria === buscador || elem.titulo === buscador,
        ),
      )
    }
    getimg()
    filtrar()
  }, [buscador])
  return (
    <>
      {photos2.length > 0
        ? photos2.map((photo) => (
            <div key={photo.id}>
              {popap && (
                <div
                  onClick={() => setPopap('', false)}
                  className='z-20 fixed flex justify-center items-center w-full left-0 top-16 bottom-0 bg-transparent backdrop-blur-[1px]'
                >
                  <div>
                    <img
                      src={popap}
                      className='cursor-zoom-out w-[260] sm:w.[500px] md:w-[650px] lg:w-[700px] h-[80vh] aspect-auto object-cover rounded-xl'
                      alt={photo.titulo}
                    />
                  </div>
                </div>
              )}
              <div className='group py-2 cursor-zoom-in relative overflow-hidden'>
                <img
                  src={photo.imagen}
                  className='w-full aspect-auto object-cover rounded-xl'
                  alt={photo.titulo}
                />
                <span
                  onClick={() => setPopap(photo.imagen, true)}
                  className='absolute flex flex-col justify-between my-2 z-10 top-0 w-full bottom-0 bg-transparent pointer-events-none rounded-xl group-hover:bg-black/50 group-hover:pointer-events-auto '
                >
                  <article className='flex justify-end p-3 opacity-0 group-hover:opacity-100'>
                    <button
                      onClick={() => handlesaveimg(photo.imagen)}
                      className='py-1 px-4 bg-red-700 text-base rounded-full text-white'
                    >
                      Guardar
                    </button>
                  </article>
                  <article className='flex gap-2 justify-end p-3 opacity-0 group-hover:opacity-100'>
                    <div className='cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center'>
                      <FiShare className=' text-1xl' />
                    </div>
                    <div className='cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center'>
                      <AiOutlineEllipsis className=' text-3xl' />
                    </div>
                  </article>
                </span>
              </div>
            </div>
          ))
        : photos.map((photo) => (
            <div key={photo.id}>
              {popap && (
                <div
                  onClick={() => setPopap('', false)}
                  className='z-20 fixed flex justify-center items-center w-full left-0 top-16 bottom-0 bg-transparent backdrop-blur-[1px]'
                >
                  <div>
                    <img
                      src={popap}
                      className='cursor-zoom-out w-[260] sm:w.[500px] md:w-[650px] lg:w-[700px] h-[80vh] aspect-auto object-cover rounded-xl'
                      alt={photo.titulo}
                    />
                  </div>
                </div>
              )}
              <div className='group py-2 cursor-zoom-in relative overflow-hidden'>
                <img
                  src={photo.imagen}
                  className='w-full aspect-auto object-cover rounded-xl'
                  alt={photo.titulo}
                />
                <span
                  onClick={() => setPopap(photo.imagen, true)}
                  className='absolute flex flex-col justify-between my-2 z-10 top-0 w-full bottom-0 bg-transparent pointer-events-none rounded-xl group-hover:bg-black/50 group-hover:pointer-events-auto '
                >
                  <article className='flex justify-end p-3 opacity-0 group-hover:opacity-100'>
                    <button
                      onClick={() => handlesaveimg(photo.imagen)}
                      className='py-1 px-4 bg-red-700 text-base rounded-full text-white'
                    >
                      Guardar
                    </button>
                  </article>
                  <article className='flex gap-2 justify-end p-3 opacity-0 group-hover:opacity-100'>
                    <div className='cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center'>
                      <FiShare className=' text-1xl' />
                    </div>
                    <div className='cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center'>
                      <AiOutlineEllipsis className=' text-3xl' />
                    </div>
                  </article>
                </span>
              </div>
            </div>
          ))}
    </>
  )
}
