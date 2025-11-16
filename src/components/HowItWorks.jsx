import { Cpu, Link2, Workflow } from 'lucide-react'

const Step = ({ icon: Icon, title, copy }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
    </div>
    <p className="mt-3 text-neutral-600 leading-relaxed">{copy}</p>
  </div>
)

export default function HowItWorks() {
  return (
    <section id="how" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold text-neutral-900">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Step icon={Cpu} title="Local Appliance" copy="Runs on your Mac mini/Mac Studio. No cloud risk." />
          <Step icon={Link2} title="Connected Intelligence" copy="Links to ERP/CRM/Docs/Phones via n8n/OpenWebUI/Supabase." />
          <Step icon={Workflow} title="Your Processes, Automated" copy="Custom agents that understand your workflows and act on them." />
        </div>
      </div>
    </section>
  )
}
