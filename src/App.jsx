import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const products = useMemo(
    () => [
      {
        id: 'p1',
        name: 'Modern Backpack',
        category: 'Accessories',
        price: 79,
        rating: 4.8,
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
      },
      {
        id: 'p2',
        name: 'Wireless Headphones',
        category: 'Audio',
        price: 129,
        rating: 4.7,
        image:
          'https://images.unsplash.com/photo-1518444082560-2fda9f4a73ff?q=80&w=2069&auto=format&fit=crop',
      },
      {
        id: 'p3',
        name: 'Minimal Watch',
        category: 'Watches',
        price: 159,
        rating: 4.9,
        image:
          'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=2069&auto=format&fit=crop',
      },
      {
        id: 'p4',
        name: 'Everyday Sneakers',
        category: 'Footwear',
        price: 95,
        rating: 4.6,
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
      },
      {
        id: 'p5',
        name: 'Cotton Tee',
        category: 'Apparel',
        price: 28,
        rating: 4.5,
        image:
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2069&auto=format&fit=crop',
      },
      {
        id: 'p6',
        name: 'Smart Bottle',
        category: 'Lifestyle',
        price: 49,
        rating: 4.4,
        image:
          'https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&w=2069&auto=format&fit=crop',
      },
      {
        id: 'p7',
        name: 'Sunglasses',
        category: 'Accessories',
        price: 65,
        rating: 4.3,
        image:
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2069&auto=format&fit=crop',
      },
      {
        id: 'p8',
        name: 'Leather Wallet',
        category: 'Accessories',
        price: 59,
        rating: 4.6,
        image:
          'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop',
      },
    ],
    []
  )

  const [cart, setCart] = useState({})

  const addToCart = (product) => {
    setCart((prev) => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }))
  }

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Products products={products} onAdd={addToCart} />
      </main>
      <Footer />
    </div>
  )
}

export default App
