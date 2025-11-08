import { useState } from 'react'

const faqs = [
  {
    q: 'How does the free trial work?',
    a: 'You get full access to all features for 14 days. No credit card required.'
  },
  {
    q: 'Can I change plans anytime?',
    a: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time from your dashboard.'
  },
  {
    q: 'Do you offer discounts?',
    a: 'We offer startup and annual billing discounts. Contact us and we\'ll set you up.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
          <p className="mt-3 text-gray-600">If you can\'t find what you\'re looking for, we\'re here to help.</p>
        </div>

        <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-100 bg-white">
          {faqs.map((item, idx) => (
            <div key={item.q} className="p-6">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={open === idx}
              >
                <span className="text-base font-medium text-gray-900">{item.q}</span>
                <span className="ml-4 text-gray-400">{open === idx ? '-' : '+'}</span>
              </button>
              {open === idx && (
                <p className="mt-3 text-gray-600 text-sm">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
