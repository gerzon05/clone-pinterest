import { HeaderPageHome } from '@/modules/header/HeaderPageHome'
import { app } from '@/firebase/firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { UserState } from '@/hooks/user'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'

const db = getFirestore(app)
const storage = getStorage(app)

interface FormData {
  titulo: string
  descripcionimg: string
  enlace: string
  categoria: string
  imagen: string
}

export const SaveImage = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const user = UserState((state) => state.user)

  let Urlimg: string = ''

  const saveinfo = handleSubmit(async (data) => {
    const newimage: FormData = {
      titulo: data.titulo,
      descripcionimg: data.descripcionimg,
      enlace: data.enlace,
      categoria: data.categoria,
      imagen: Urlimg,
    }
    try {
      await addDoc(collection(db, data.categoria), {
        ...newimage,
      })
      await addDoc(collection(db, 'imagenes'), {
        ...newimage,
      })
      toast.success('su imagen se guardo con exito')
    } catch (error) {
      toast.error('hubo un error al subir la imagen' + error)
    }
  })
  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivoimg = event.target.files?.[0]
    if (!archivoimg) return
    const refImg = ref(storage, `imagenes/${archivoimg.name}`)
    await uploadBytes(refImg, archivoimg)
    Urlimg = await getDownloadURL(refImg)
  }
  return (
    <>
      <Toaster position='top-right' />
      <HeaderPageHome />
      <main className='bg-slate-300 p-12 flex justify-center mt-16'>
        <div className='bg-white rounded-2xl max-w-4xl p-8'>
          <section>
            <form onSubmit={saveinfo}>
              <div className='flex justify-between py-3'>
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
                </section>
                <section className='w-80 p-2 flex flex-col gap-9'>
                  <div>
                    <input
                      {...register('titulo')}
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
                      {...register('descripcionimg')}
                      type='text'
                      className='w-full border-0 text-1xl'
                      placeholder='Indica en que consiste tu pin'
                    />
                    <hr className='bg-black h-px' />
                  </figure>
                  <figure>
                    <input
                      {...register('enlace')}
                      type='text'
                      className='w-full border-0 text-1xl'
                      placeholder='Añade un enlace de destino'
                    />
                    <hr className='bg-black h-px' />
                  </figure>
                  <figure>
                    <input
                      required
                      {...register('categoria')}
                      type='text'
                      className='w-full border-0 text-1xl'
                      placeholder='añade la categoria de tu pin'
                    />
                    <hr className='bg-black h-px' />
                  </figure>
                </section>
              </div>
              <button className='rounded-lg bg-red-700 w-full mt-5 py-3 text-xl text-white'>
                Guardar
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}
