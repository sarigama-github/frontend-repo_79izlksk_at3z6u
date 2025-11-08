import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    sub: 'For prototypes and testing',
    features: ['1 project', 'Community support', '100 requests/day']
  },
  {
    name: 'Pro',
    price: '$29',
    sub: 'For growing products',
    features: ['Unlimited projects', 'Priority support', '100k requests/month']
  },
  {
    name: 'Scale',
    price: '$99',
    sub: 'For production scale',
    features: ['SLA & SSO', 'Custom limits', 'Dedicated onboarding']
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free, upgrade when you grow.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.sub}</p>
                </div>
                <div className="text-3xl font-bold text-gray-900">{plan.price}<span className="text-base font-medium text-gray-500">{plan.price !== 'Free' ? '/mo' : ''}</span></div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-md bg-gray-900 text-white py-2.5 font-medium hover:bg-gray-800">Choose {plan.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
