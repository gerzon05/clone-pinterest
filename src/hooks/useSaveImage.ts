import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'sonner'
import { app } from '@/firebase/firebase'
import { UserState } from '@/store/user'

const db = getFirestore(app)

export async function UseSaveImage({ url }: { url: string }) {
  const user = UserState(state => state.user)

  const guardar = {
    imgURL: url,
  }
  try {
    await addDoc(collection(db, (user as { email: string }).email), {
      ...guardar,
    })
  }
  catch (error) {
    toast.error('Error al guardar la imagen')
  }
}
