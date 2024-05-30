import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'sonner'
import { app } from '@/firebase/firebase'

const db = getFirestore(app)

export async function UseSaveImage({ url, email }: { url: string, email: string }) {
  const guardar = {
    imgURL: url,
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
