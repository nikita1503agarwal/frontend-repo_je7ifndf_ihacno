import { motion } from 'framer-motion'

export default function Proof() {
  const logos = ['Muster GmbH', 'Schmidt & Co.', 'Kraftwerke', 'HanseTech', 'Bergmann AG']
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-xl font-medium text-neutral-900">Built for real businesses, not tech demos.</h2>
          <p className="mt-2 text-neutral-600">Hosted on your hardware. Connected to your tools. Reinforced by real human workflows.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 items-center gap-8 text-neutral-400">
          {logos.map((l, i) => (
            <motion.div key={l} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center text-sm tracking-wide">
              {l}
            </motion.div>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-neutral-500">
          “Hosted on your hardware. Connected to your tools. Reinforced by real human workflows.”
        </div>
      </div>
    </section>
  )
}
