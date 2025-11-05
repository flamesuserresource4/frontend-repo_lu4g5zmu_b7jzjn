import { ShoppingCart, Star } from 'lucide-react'

function Products({ products, onAdd }) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Trending now</h2>
          <p className="mt-1 text-gray-600">Hand-picked items customers love this week</p>
        </div>
        <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">View all</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <div key={p.id} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900 leading-snug">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.category}</p>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={14} className="fill-amber-400" />
                  <span className="text-xs font-medium text-gray-700">{p.rating}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-lg font-bold text-gray-900">${p.price.toFixed(2)}</div>
                <button
                  onClick={() => onAdd(p)}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
                >
                  <ShoppingCart size={16} />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
