import { Shield, BarChart, Zap, Layers } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Production-grade auth',
    desc: 'Secure sessions, social logins, role-based access — all prewired and ready.'
  },
  {
    icon: BarChart,
    title: 'Metered billing',
    desc: 'Usage-based plans with webhooks and dunning flows that just work.'
  },
  {
    icon: Zap,
    title: 'Blazing fast performance',
    desc: 'Edge-first architecture with global caching and instant cold-starts.'
  },
  {
    icon: Layers,
    title: 'Composable primitives',
    desc: 'UI and API building blocks designed for rapid product iteration.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Everything you need to ship</h2>
          <p className="mt-3 text-gray-600">The modern stack for modern SaaS — batteries included, no boilerplate.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
