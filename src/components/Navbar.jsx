import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">SkyStack</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900">Sign in</button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Start free</button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-700">Features</a>
            <a href="#pricing" className="block text-gray-700">Pricing</a>
            <a href="#faq" className="block text-gray-700">FAQ</a>
            <div className="pt-3 flex gap-3">
              <button className="flex-1 px-4 py-2 text-gray-700 hover:text-gray-900">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Start free</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
