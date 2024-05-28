import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { app } from '@/firebase/firebase'
import { useLoading } from '@/store/use-loading'

const db = getFirestore(app)

interface UseGetImageProps {
  filter?: string
}

export function UseGetImage({ filter }: UseGetImageProps) {
  const [photos, setPhotos] = useState<object[]>([])
  const loading = useLoading()

  useEffect(() => {
    const getImage = async () => {
      try {
        loading.setLoad(true)
        const database = await getDocs(collection(db, filter || 'imagenes'))
        const docs: object[] = []
        database.forEach((img: any) => {
          docs.push(img.data())
        })
        setPhotos(docs)
      }
      catch (error) {
        toast.error('Error al cargar las imagenes')
      }
      finally {
        loading.setLoad(false)
      }
    }
    getImage()
  }, [])

  return { photos, loading }
}
