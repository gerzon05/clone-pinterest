import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { TextInput } from 'flowbite-react'
import { UserState } from '@/store/user'
import { app } from '@/firebase/firebase'

const db = getFirestore(app)
const storage = getStorage(app)

interface FormData {
  titulo: string
  description: string
  enlace: string
  category: string
  imagen: string
}

export function SaveImage() {
  const { register, handleSubmit } = useForm<FormData>()
  const user = UserState(state => state.user)

  let Url_image: string = ''

  const save_info = handleSubmit(async (data) => {
    const new_image: FormData = {
      titulo: data.titulo,
      description: data.description,
      enlace: data.enlace,
      category: data.category,
      imagen: Url_image,
    }
    try {
      await addDoc(collection(db, data.category), {
        ...new_image,
      })
      await addDoc(collection(db, 'imagenes'), {
        ...new_image,
      })
      toast.success('su imagen se guardo Correctamente')
    }
    catch (error) {
      toast.error(`hubo un error al subir la imagen${error}`)
    }
  })
  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivo_image = event.target.files?.[0]
    if (!archivo_image)
      return
    const refImg = ref(storage, `imagenes/${archivo_image.name}`)
    await uploadBytes(refImg, archivo_image)
    Url_image = await getDownloadURL(refImg)
  }
  return (
    <>
      <main className="bg-white p-2 md:p-16 flex justify-center">
        <div className=" rounded-2xl w-full">
          <section>
            <form onSubmit={save_info}>
              <div className="flex justify-center items-center flex-wrap w-full md:w-[80%] m-auto">
                <div className="flex items-center justify-center w-full md:w-1/2">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        {' '}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      required
                      className="hidden"
                      onChange={handleFile}
                    />
                  </label>
                </div>
                <section className="w-full md:w-1/2 p-2 flex flex-col gap-9">
                  <div>
                    <TextInput
                      {...register('titulo')}
                      type="text"
                      className="w-full border-0 text-4xl"
                      placeholder="Añade un titulo"
                      required
                    />
                  </div>
                  <figure className="flex items-center gap-3">
                    <img
                      src={
                        (user as { photoURL: string }).photoURL
                        || 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'
                      }
                      alt="foto de perfil"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>
                      <h2>
                        {(user as { displayName: string }).displayName
                        || (user as { email: string }).email}
                      </h2>
                    </span>
                  </figure>
                  <figure>
                    <TextInput
                      {...register('description')}
                      type="text"
                      required
                      placeholder="Indica en que consiste tu pin"
                    />
                  </figure>
                  <figure>
                    <TextInput
                      {...register('enlace')}
                      type="text"
                      placeholder="Añade un enlace de destino"
                    />
                  </figure>
                  <figure>
                    <select
                      required
                      {...register('category')}
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="deporte">Deporte</option>
                      <option value="inspiracion">Inspiración</option>
                      <option value="tiempo-libre">Tiempo libre</option>
                      <option value="carros">Carros</option>
                      <option value="motos">Motos</option>
                      <option value="pasatiempo">Pasatiempos</option>
                      <option value="trabajo">Trabajo</option>
                      <option value="educacion">Educación</option>
                    </select>
                  </figure>
                </section>
              </div>
              <div className="flex justify-center mt-10">
                <button className="rounded-lg bg-red-700 w-full py-3 text-xl text-white w-full md:w-[80%]">
                  Guardar
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}
