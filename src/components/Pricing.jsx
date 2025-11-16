import { Check } from 'lucide-react'

const Card = ({ name, price, points }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col">
    <h3 className="text-xl font-semibold text-neutral-900">{name}</h3>
    <div className="mt-2 text-3xl font-semibold text-neutral-900">{price}</div>
    <ul className="mt-4 space-y-2 text-neutral-600">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2"><Check className="h-5 w-5 text-emerald-600" /> <span>{p}</span></li>
      ))}
    </ul>
    <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-5 py-2 text-sm font-medium hover:bg-neutral-800">Get started</a>
  </div>
)

export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold text-neutral-900">Pricing</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card name="Starter Appliance" price="€3,900" points={["Includes Mac mini","Setup + training","Receptionist starter pack"]} />
          <Card name="Business Appliance" price="€7,900" points={["Mac Studio","Advanced agents","Priority support"]} />
          <div className="rounded-2xl border border-neutral-200 bg-white p-8">
            <h3 className="text-xl font-semibold text-neutral-900">Custom Integrations</h3>
            <p className="mt-2 text-neutral-600">For bigger companies with complex workflows.</p>
            <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-5 py-2 text-sm font-medium hover:bg-emerald-700">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
