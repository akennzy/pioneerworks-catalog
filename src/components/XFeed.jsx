import { format } from 'date-fns'

const posts = [
  { text: "Atlas Builder Mk-V concluiu a montagem do Módulo Habitat-3 na órbita lunar. 48h à frente do cronograma.", date: "2025-11-08", likes: 2847 },
  { text: "Vanguard Interceptor testou com sucesso o novo railgun de 5MJ em LEO. Precisão: 0.3m a 800km.", date: "2025-10-22", likes: 5672 }
]

export default function XFeed() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron text-cosmic dark:text-plasma">
          @PioneerWorks no X
        </h2>
        <div className="space-y-6">
          {posts.map((post, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <p className="text-lg mb-3">{post.text}</p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{format(new Date(post.date), 'dd MMM yyyy')}</span>
                <span>❤️ {post.likes.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}