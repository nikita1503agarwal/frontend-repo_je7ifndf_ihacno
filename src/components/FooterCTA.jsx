export default function FooterCTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-neutral-200 bg-white p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">Let’s build your company’s AI foundation.</h2>
          <p className="mt-3 text-neutral-600">Calm setup. Fixed pricing. DSGVO-first.</p>
          <a href="#" className="mt-7 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-6 py-3 text-base font-medium hover:bg-emerald-700">Book a 20-min Demo</a>
          <div className="mt-8 text-xs text-neutral-500">Imprint • DSGVO • Trust badges</div>
        </div>
      </div>
    </section>
  )
}
