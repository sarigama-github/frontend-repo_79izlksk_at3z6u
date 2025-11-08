import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} SkyStack. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
