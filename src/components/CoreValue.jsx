export default function CoreValue() {
  const items = [
    { t: 'Total Privacy', d: 'All data stays in your building.' },
    { t: 'Always On', d: 'Your own AI colleague, 24/7.' },
    { t: 'Knows Your Business', d: 'Your documents, your rules, your workflows.' },
    { t: 'Instant ROI', d: 'Removes repetitive tasks within days, not months.' },
    { t: 'Fixed Pricing', d: 'No surprise usage fees.' },
  ]
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold text-neutral-900">Why companies pick Voicera</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-4">
          {items.map((i) => (
            <li key={i.t} className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="text-neutral-900 font-medium">{i.t}</div>
              <div className="text-neutral-600">{i.d}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
