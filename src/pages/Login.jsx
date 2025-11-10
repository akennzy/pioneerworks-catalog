// src/components/LoginModal.jsx
import { useState } from 'react'
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../lib/firebase'

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  const handleGoogle = () => signInWithPopup(auth, googleProvider)
  const handleEmail = () => {
    if (isRegister) createUserWithEmailAndPassword(auth, email, password)
    else signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-md w-full" onClick={e => e.stopPropagation()}>
        <h2 className="text-3xl font-bold text-center mb-6 font-orbitron text-cosmic">Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 mb-4 border rounded-lg" />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 mb-4 border rounded-lg" />
        <button onClick={handleEmail} className="w-full bg-plasma text-cosmic py-3 rounded-lg font-bold mb-4">
          {isRegister ? 'Criar Conta' : 'Entrar'}
        </button>
        <button onClick={handleGoogle} className="w-full border border-plasma text-plasma py-3 rounded-lg font-bold mb-4">
          Continuar com Google
        </button>
        <p className="text-center text-sm">
          {isRegister ? 'Já tem conta?' : 'Não tem conta?'}
          <button onClick={() => setIsRegister(!isRegister)} className="text-plasma ml-1 underline">
            {isRegister ? 'Faça login' : 'Registre-se'}
          </button>
        </p>
      </div>
    </div>
  )
}