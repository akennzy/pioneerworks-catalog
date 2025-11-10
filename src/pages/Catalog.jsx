import { useState } from 'react'
import FilterBar from '../components/FilterBar'
import ShipCard from '../components/ShipCard'
import { ships } from '../data/ships'

export default function Catalog() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = ships.filter(ship => {
    const matchesFilter = filter === 'all' || ship.category === filter
    const matchesSearch = ship.name.toLowerCase().includes(search.toLowerCase()) ||
                         ship.code.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 font-orbitron text-cosmic dark:text-plasma">
          Catálogo de Naves
        </h1>
        <FilterBar filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filtered.map(ship => <ShipCard key={ship.id} ship={ship} />)}
        </div>
      </div>
    </section>
  )
}