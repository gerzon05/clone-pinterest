// import { collection, getDocs, getFirestore } from 'firebase/firestore'
// import { useEffect, useState } from 'react'
// import { toast } from 'sonner'
// import { app } from '@/firebase/firebase'
// import { useLoading } from '@/store/use-loading'

// const db = getFirestore(app)

// interface UseGetImageProps {
//   filter?: string
// }
// interface ModelImage {
//   title: string
//   imagen: string
//   url: string
//   description: string
//   category: string
// }

// export function UseGetImage({ filter = 'imagenes' }: UseGetImageProps) {
//   const [photos, setPhotos] = useState<object[]>([])
//   const loading = useLoading()

//   useEffect(() => {
//     const getImage = async () => {
//       try {
//         loading.setLoad(true)
//         const database = await getDocs(collection(db, filter))
//         const docs: ModelImage[] = []
//         database.forEach((img) => {
//           docs.push(img.data() as ModelImage)
//         })
//         console.log(docs)
//         setPhotos(docs)
//       }
//       catch (error) {
//         toast.error('Error al cargar las imagenes')
//       }
//       finally {
//         loading.setLoad(false)
//       }
//     }
//     getImage()
//   }, [])

//   return { photos, loading }
// }

import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { toast } from 'sonner'
import { app } from '@/firebase/firebase'

const db = getFirestore(app)

interface UseGetImageProps {
  filter?: string
}
export interface ModelImage {
  titulo: string
  imagen: string
  enlace: string
  descripcionimg: string
  categoria: string
}

export async function UseGetImage({ filter = 'imagenes' }: UseGetImageProps) {
  try {
    const database = await getDocs(collection(db, filter))
    const docs: ModelImage[] = []
    database.forEach((img) => {
      docs.push(img.data() as ModelImage)
    })
    return docs.map(img => ({
      title: img.titulo,
      image: img.imagen,
      url: img.enlace,
      description: img.descripcionimg,
      category: img.categoria,
    }))
  }
  catch (error) {
    toast.error('Error al cargar las imagenes')
  }
}
