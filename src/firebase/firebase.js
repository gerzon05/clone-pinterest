import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './config'
import { getAuth } from 'firebase/auth'

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
