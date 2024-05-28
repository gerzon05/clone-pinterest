import { app } from '@/firebase/firebase'
import { UserState } from '@/store/user'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const db = getFirestore(app)

export async function UseSaveImage({ url }: { url: string }) {
  const user = UserState((state) => state.user)

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
