import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'

export default function Dashboard() {
  const [user] = useAuthState(auth)
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (!user) return <div>Faça login para ver seu dashboard.</div>

  return (
    <div className="py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Olá, {user.displayName}</h1>
      <h2 className="text-2xl mb-4">Naves Favoritas</h2>
      <div className="grid grid-cols-3 gap-6">
        {favorites.map(id => <ShipCard key={id} ship={ships.find(s => s.id === id)} />)}
      </div>
    </div>
  )
}