import { useEffect, useState } from 'react'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '@/firebase/firebase'
import { UserState } from '@/hooks/user'
import { CircleEllipsis, RotateCcw, Share } from 'lucide-react'
import { useLoading } from '@/hooks/use-loading'

const db = getFirestore(app)

interface PinProps {
  filter?: string
}

export const Pin = ({ filter }: PinProps) => {
  const user = UserState((state) => state.user)
  const loading = useLoading()

  const [photos, setPhotos] = useState<object[]>([])
  // const [photos2, setPhotos2] = useState([])
  const [popap, setPopap] = useState<{ img: string; bool: boolean }>({
    img: '',
    bool: false,
  })

  const handlesaveimg = async (url: string) => {
    const guardar = {
      imgURL: url,
    }
    try {
      await addDoc(collection(db, (user as { email: string }).email), {
        ...guardar,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getimg = async () => {
      try {
        loading.setLoad(true)
        const basedatos = await getDocs(collection(db, (filter || 'imagenes')))
        const docs: object[] = []
        basedatos.forEach((img) => {
          docs.push(img.data())
        })
        setPhotos(docs)
      } catch (error) {
        console.log(error)
      }
      finally {
        loading.setLoad(false)
      }
    }
    getimg()
  }, [])
  return (
    <>
      {
        loading.load && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><RotateCcw size={40} className='animate-spin  inline-block' /></div>
      }
      {photos.map((photo, index) => (
        <div key={index}>
          {popap.bool && (
            <div
              onClick={() => setPopap({ img: '', bool: false })}
              className='z-50 fixed flex justify-center items-center w-full left-0 top-0 bottom-0 bg-transparent backdrop-blur-[1px]'
            >
              <div>
                <img
                  src={popap.img}
                  className='cursor-zoom-out w-[260] sm:w.[500px] md:w-[650px] lg:w-[700px] h-[80vh] aspect-auto object-cover rounded-xl'
                  alt={(photo as { titulo: string }).titulo}
                />
              </div>
            </div>
          )}
          <div className='group py-2 cursor-zoom-in relative overflow-hidden'>
            <img
              src={(photo as { imagen: string }).imagen}
              className='w-full aspect-auto object-cover rounded-xl'
              alt={(photo as { titulo: string }).titulo}
            />
            <span
              onClick={() =>
                setPopap({
                  img: (photo as { imagen: string }).imagen,
                  bool: true,
                })
              }
              className='absolute flex flex-col justify-between my-2 z-10 top-0 w-full bottom-0 bg-transparent pointer-events-none rounded-xl group-hover:bg-black/50 group-hover:pointer-events-auto '
            >
              <article className='flex justify-end p-3 opacity-0 group-hover:opacity-100'>
                <button
                  onClick={() =>
                    handlesaveimg((photo as { imagen: string }).imagen)
                  }
                  className='py-1 px-4 bg-red-700 text-base rounded-full text-white'
                >
                  Guardar
                </button>
              </article>
              <article className='flex gap-2 justify-end p-3 opacity-0 group-hover:opacity-100'>
                <div className='cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center'>
                  <Share className=' text-3xl' />
                </div>
                <div className='cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center'>
                  <CircleEllipsis className=' text-3xl' />
                </div>
              </article>
            </span>
          </div>
        </div>
      ))}
    </>
  )
}
