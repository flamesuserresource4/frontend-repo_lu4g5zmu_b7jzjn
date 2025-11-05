function Footer() {
  return (
    <footer id="about" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900">About ShopSphere</h4>
          <p className="mt-3 text-sm text-gray-600">
            We curate high-quality essentials that blend comfort, craftsmanship, and timeless design.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Customer Care</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
            <li><a href="#" className="hover:text-gray-900">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Stay in touch</h4>
          <p className="mt-3 text-sm text-gray-600">Subscribe to get updates on new drops and special offers.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" required placeholder="you@example.com" className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
