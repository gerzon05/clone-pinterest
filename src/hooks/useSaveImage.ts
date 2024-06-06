import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'sonner'
import type { LookImage } from './useLookImage'
import { app } from '@/firebase/firebase'

const db = getFirestore(app)

export async function UseSaveImage({ photo, email }: { photo: LookImage, email: string }) {
  const guardar = {
    titulo: photo.title,
    imagen: photo.image,
    enlace: photo.url,
    descripcionimg: photo.description,
    categoria: photo.category,
  }
  try {
    await addDoc(collection(db, email), {
      ...guardar,
    })
    toast.success('Imagen guardada')
  }
  catch (error) {
    toast.error('Error al guardar la imagen')
  }
}
