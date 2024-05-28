import { app } from '@/firebase/firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { UserState } from '@/store/user'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

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
      <main className='bg-white p-12 flex justify-center'>
        <div className=' rounded-2xl max-w-4xl p-8'>
          <section className='flex'>
            <form onSubmit={saveinfo}>
              <div className='flex justify-center items-center gap-4'>
                <div className='flex items-center justify-center w-full md:w-1/2'>
                  <label
                    htmlFor='dropzone-file'
                    className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                  >
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                      <svg
                        className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 16'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                        />
                      </svg>
                      <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                        <span className='font-semibold'>Click to upload</span>{' '}
                        or drag and drop
                      </p>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id='dropzone-file'
                      type='file'
                      className='hidden'
                      onChange={handleFile}
                    />
                  </label>
                </div>
                <section className='w-full md:w-1/2 p-2 flex flex-col gap-9'>
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
