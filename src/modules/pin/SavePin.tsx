import { useState } from 'react'
import { HeaderPageHome } from '../header/HeaderPageHome'
import { app } from '../../firebase/firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { UserState } from '@/src/hooks/user'

const db = getFirestore(app)
const storage = getStorage(app)

export const SavePin = () => {
  const [cargueimg, setCargueImg] = useState('')
  const user = UserState((state) => state.user)

  let Urlimg: string = ''
  interface ImageData {
    titulo: string
    descripcionimg: string
    enlace: string
    categoria: string
    imagen: string
  }

  const saveinfo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const titulo = (event.target as HTMLFormElement).titulo.value as string
    const descripcionimg = (event.target as HTMLFormElement).descripcionimg
      .value as string
    const enlace = (event.target as HTMLFormElement).enlace.value as string
    const categoria = (event.target as HTMLFormElement).categoria
      .value as string
    const newimage: ImageData = {
      titulo: titulo,
      descripcionimg: descripcionimg,
      enlace: enlace,
      categoria: categoria,
      imagen: Urlimg,
    }
    //guardar informacion
    try {
      await addDoc(collection(db, categoria), {
        ...newimage,
      })
      setCargueImg('su imagen se guardo con exito')
    } catch (error) {
      setCargueImg('hubo un error al subir la imagen' + error)
    }
    try {
      await addDoc(collection(db, 'imagenes'), {
        ...newimage,
      })
      setCargueImg('su imagen se guardo con exito')
    } catch (error) {
      setCargueImg('hubo un error al subir la imagen' + error)
    }
    ; (event.target as HTMLFormElement).titulo.value = ''
      ; (event.target as HTMLFormElement).descripcionimg.value = ''
      ; (event.target as HTMLFormElement).enlace.value = ''
      ; (event.target as HTMLFormElement).categoria.value = ''
      ; (event.target as HTMLFormElement).file.value = ''
  }
  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivoimg = event.target.files?.[0]
    if (!archivoimg) return
    const refImg = ref(storage, `imagenes/${archivoimg.name}`)
    await uploadBytes(refImg, archivoimg)
    Urlimg = await getDownloadURL(refImg)
  }
  return (
    <>
      <HeaderPageHome />
      <main className='bg-slate-300 p-12 flex justify-center mt-16'>
        <div className='bg-white rounded-2xl max-w-4xl p-8'>
          <section>
            <form onSubmit={saveinfo}>
              <div className='flex justify-between py-3'>
                <h3>{cargueimg}</h3>
                <button className='rounded-lg bg-red-700 px-6 py-3 text-xl text-white'>
                  Guardar
                </button>
              </div>
              <div className='flex justify-center items-center flex-wrap'>
                <section className='w-80 flex justify-center items-center flex-col gap-2'>
                  <div className='w-full h-96 rounded-3xl bg-slate-400 flex justify-center items-center '>
                    <input
                      type='file'
                      id='file'
                      placeholder='agregar imagen'
                      className='rounded-3xl text-sm'
                      onChange={handleFile}
                    />
                  </div>
                  <button className='w-full rounded-3xl py-2 bg-slate-400'>
                    Guardar desde el sitio
                  </button>
                </section>
                <section className='w-80 p-2 flex flex-col gap-9'>
                  <div>
                    <input
                      id='titulo'
                      type='text'
                      className='w-full border-0 text-4xl'
                      placeholder='Añade un titulo'
                      required
                    />
                    <hr className='bg-black h-px' />
                  </div>
                  <figure className='flex items-center gap-3'>
                    <img
                      src={
                        (user as { photoURL: string }).photoURL ||
                        'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'
                      }
                      alt='foto de perfil'
                      className='w-8 h-8 rounded-full object-cover'
                    />
                    <span>
                      <h2>
                        {(user as { displayName: string }).displayName ||
                          (user as { email: string }).email}
                      </h2>
                    </span>
                  </figure>
                  <figure>
                    <input
                      id='descripcionimg'
                      type='text'
                      className='w-full border-0 text-1xl'
                      placeholder='Indica en que consiste tu pin'
                    />
                    <hr className='bg-black h-px' />
                  </figure>
                  <figure>
                    <input
                      id='enlace'
                      type='text'
                      className='w-full border-0 text-1xl'
                      placeholder='Añade un enlace de destino'
                    />
                    <hr className='bg-black h-px' />
                  </figure>
                  <figure>
                    <input
                      required
                      id='categoria'
                      type='text'
                      className='w-full border-0 text-1xl'
                      placeholder='añade la categoria de tu pin'
                    />
                    <hr className='bg-black h-px' />
                  </figure>
                </section>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}
