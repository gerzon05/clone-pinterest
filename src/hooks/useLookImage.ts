import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { UseGetImage } from './useGetImage'
import { useLoading } from '@/store/use-loading'

export interface LookImage {
  title: string
  image: string
  url: string
  description: string
  category: string
}

export function UseLookImage({ filter }: { filter?: string }) {
  const [photos, setPhotos] = useState<LookImage[] | undefined >([])
  const loading = useLoading()

  useEffect(() => {
    const getImages = async () => {
      try {
        loading.setLoad(true)
        const images = await UseGetImage({ filter })
        setPhotos(images)
      }
      catch (error) {
        toast.error('Error al cargar las imagenes')
      }
      finally {
        loading.setLoad(false)
      }
    }
    getImages()
  }, [filter])

  return { photos, loading }
}
