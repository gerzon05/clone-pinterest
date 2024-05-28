import { CircleEllipsis, RotateCcw, Share } from 'lucide-react'
import { useLocation } from 'wouter'
import { StateImage } from '@/store/hookimage'
import { UseGetImage } from '@/hooks/useGetImage'
import { UseSaveImage } from '@/hooks/useSaveImage'

interface PinProps {
  filter?: string
}

export const Pin = ({ filter }: PinProps) => {
  const [_, setLocation] = useLocation()
  const { setImage } = StateImage()

  const handleSaveImage = (url: string) => {
    UseSaveImage({ url })
  }

  const { photos, loading } = UseGetImage({ filter: filter })

  const handleImage = (photo: object) => {
    setImage(photo)
    setLocation(
      `/home/img/imagen-${(photo as { titulo: string }).titulo.replace(/ /g, '-').toLowerCase()}`,
    )
  }

  return (
    <>
      {loading.load && (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <RotateCcw size={40} className='animate-spin  inline-block' />
        </div>
      )}
      {photos.map((photo, index) => (
        <div key={index} onClick={() => handleImage(photo)}>
          <div className='group py-2 cursor-zoom-in relative overflow-hidden'>
            <img
              src={(photo as { imagen: string }).imagen}
              className='w-full aspect-auto object-cover rounded-xl'
              alt={(photo as { titulo: string }).titulo}
            />
            <span className='hidden absolute md:flex flex-col justify-between my-2 z-10 top-0 w-full bottom-0 bg-transparent pointer-events-none rounded-xl group-hover:bg-black/50 group-hover:pointer-events-auto '>
              <article className='flex justify-end p-3 opacity-0 group-hover:opacity-100'>
                <button
                  onClick={() =>
                    handleSaveImage((photo as { imagen: string }).imagen)
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
