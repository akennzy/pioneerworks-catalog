import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
import { generatePDF } from '../lib/pdfGenerator'

export default function Military() {
  const [user] = useAuthState(auth)
  const militaryShip = { /* Vanguard Interceptor */ }

  if (!user) {
    return <div className="text-center py-20">Acesso negado. Faça login.</div>
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-red-900/20">
      <h1 className="text-5xl font-bold text-center mb-12 text-red-600">ÁREA RESTRITA</h1>
      <button onClick={() => generatePDF(militaryShip, true)} className="bg-red-600 text-white px-8 py-4 rounded-xl">
        Baixar PDF Classificado
      </button>
    </div>
  )
}