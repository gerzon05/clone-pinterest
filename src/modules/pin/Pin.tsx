import { CircleEllipsis, RotateCcw, Share } from 'lucide-react'
import { useLocation } from 'wouter'
import { StateImage } from '@/store/hookimage'
import { UseSaveImage } from '@/hooks/useSaveImage'
import { UserState } from '@/store/user'
import type { LookImage } from '@/hooks/useLookImage'
import { UseLookImage } from '@/hooks/useLookImage'

interface PinProps {
  filter?: string
}

export function Pin({ filter }: PinProps) {
  const user = UserState(state => state.user)
  const [_, setLocation] = useLocation()
  const { setImage } = StateImage()

  const email = (user as ({ email: string })).email

  const handleSaveImage = (photo: LookImage) => {
    UseSaveImage({ photo, email })
  }

  const { photos, loading } = UseLookImage({ filter })

  const handleImage = (photo: LookImage) => {
    setImage(photo)
    setLocation(
      `/home/img/imagen-${photo.title.replace(/ /g, '-').toLowerCase()}`,
    )
  }

  return (
    <>
      {loading.load && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <RotateCcw size={40} className="animate-spin  inline-block" />
        </div>
      )}
      {photos?.map((photo, index: number) => (
        <div key={index}>
          <div className="group py-2 relative overflow-hidden">
            <img
              src={photo.image}
              className="w-full aspect-auto object-cover rounded-xl"
              alt={photo.title}
            />
            <button
              onClick={() =>
                handleSaveImage(photo)}
              className="py-1 px-4 bg-red-700 text-base absolute top-4 right-2 rounded-full z-40 text-white opacity-0 group-hover:opacity-100"
            >
              Guardar
            </button>
            <article className="absolute z-40 right-2 bottom-4 opacity-0 group-hover:opacity-100 flex gap-2">
              <button className="cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center">
                <Share className=" text-3xl" />
              </button>
              <button className="cursor-pointer w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center">
                <CircleEllipsis className=" text-3xl" />
              </button>
            </article>
            <button className="absolute z-10 top-0 w-full my-2 bottom-0 bg-transparent pointer-events-none rounded-xl group-hover:bg-black/50 group-hover:pointer-events-auto cursor-zoom-in" onClick={() => handleImage(photo)}>
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
