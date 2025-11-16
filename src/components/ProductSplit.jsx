import { ArrowUpRight } from 'lucide-react'

const Pillar = ({ title, copy }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:shadow-md">
    <h3 className="text-2xl font-semibold text-neutral-900">{title}</h3>
    <p className="mt-3 text-neutral-600 leading-relaxed">{copy}</p>
    <a href="#how" className="mt-5 inline-flex items-center text-emerald-700 hover:text-emerald-800 text-sm font-medium">
      See how it works
      <ArrowUpRight className="ml-1 h-4 w-4" />
    </a>
  </div>
)

export default function ProductSplit() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Pillar
            title="AI Receptionist"
            copy="Answers inbound calls and chats with speed and clarity. Routes, schedules, and resolves routine requests so your team can focus."
          />
          <Pillar
            title="Mittelstands Agents"
            copy="Internal AI that works across ERP/CRM/Docs/Processes to remove chaos, reduce mistakes, and keep work moving."
          />
        </div>
      </div>
    </section>
  )
}
