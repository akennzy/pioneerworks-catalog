export default function FilterBar({ filter, setFilter, search, setSearch }) {
  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'construcao', label: 'Construção' },
    { id: 'exploracao', label: 'Exploração' },
    { id: 'logistica', label: 'Logística' },
    { id: 'militar', label: 'Militar' }
  ]

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Buscar nave ou código..."
        className="flex-1 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-900 dark:text-white"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-3 rounded-xl font-medium transition ${
              filter === cat.id
                ? 'bg-plasma text-cosmic'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}