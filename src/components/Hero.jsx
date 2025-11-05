import { Star } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-4">
              <Star size={14} className="fill-blue-600 text-blue-600" /> New season drop is live
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Elevate your everyday with modern essentials
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Discover a curated selection of products designed for comfort, performance, and style. Free shipping on orders over $50.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-gray-800">
                Shop the Collection
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50">
                Learn More
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="font-semibold text-gray-900">4.9</span> / 5 rating</div>
              <div className="flex items-center gap-2"><span className="font-semibold text-gray-900">10k+</span> happy customers</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2069&auto=format&fit=crop"
                alt="Lifestyle products"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
