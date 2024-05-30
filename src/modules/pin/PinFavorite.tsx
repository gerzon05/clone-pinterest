import { CircleEllipsis, RotateCcw, Share } from 'lucide-react'
import { useLocation } from 'wouter'
import { StateImage } from '@/store/hookimage'
import { UseGetImage } from '@/hooks/useGetImage'

interface PinProps {
  filter?: string
}

export function PinFavorite({ filter }: PinProps) {
  const [_, setLocation] = useLocation()
  const { setImage } = StateImage()

  const { photos, loading } = UseGetImage({ filter })

  const handleImage = (photo: object) => {
    setImage(photo)
    setLocation(
      `/home/img/imagen-${(photo as { titulo: string }).titulo.replace(/ /g, '-').toLowerCase()}`,
    )
  }

  return (
    <>
      {loading.load && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <RotateCcw size={40} className="animate-spin  inline-block" />
        </div>
      )}
      {photos.map((photo, index) => (
        <div key={index}>
          <div className="group py-2 cursor-zoom-in relative overflow-hidden">
            <img
              src={(photo as { imgURL: string }).imgURL}
              className="w-full aspect-auto object-cover rounded-xl"
              alt="imagen favorita"
            />
            <article className="absolute z-40 right-2 bottom-4 opacity-0 group-hover:opacity-100 flex gap-2">
              <button className="cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center">
                <Share className=" text-3xl" />
              </button>
              <button className="cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center">
                <CircleEllipsis className=" text-3xl" />
              </button>
            </article>
            <button className="hidden absolute md:flex flex-col justify-between my-2 z-10 top-0 w-full bottom-0 bg-transparent pointer-events-none rounded-xl group-hover:bg-black/50 group-hover:pointer-events-auto" onClick={() => handleImage(photo)}>
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
