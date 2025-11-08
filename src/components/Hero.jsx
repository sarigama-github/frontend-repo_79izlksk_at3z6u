import Spline from '@splinetool/react-spline'
import { Check } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
              Launch your SaaS in days, not months
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Build, launch, and scale your SaaS without the busywork
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              SkyStack handles auth, billing, and infrastructure so you can focus on what makes your product unique.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Start free trial
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition">
                Book a demo
              </button>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                'Auth & user management',
                'Subscriptions & metered billing',
                'Usage analytics & reporting',
                'Deploy to global edge in 1 click',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[420px] rounded-2xl border border-gray-100 bg-white shadow-sm">
            <Spline scene="https://prod.spline.design/0wOEaSAxwu0uq4Cq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
