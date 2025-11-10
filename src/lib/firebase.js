// src/lib/firebase.js
import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut 
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI", // ← Depois você coloca a real
  authDomain: "pioneerworks-auth.firebaseapp.com",
  projectId: "pioneerworks-auth",
  storageBucket: "pioneerworks-auth.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
}

const app = initializeApp(firebaseConfig)

// EXPORTANDO TUDO CORRETAMENTE
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut }