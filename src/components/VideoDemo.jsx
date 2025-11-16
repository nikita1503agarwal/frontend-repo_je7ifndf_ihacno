export default function VideoDemo() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/demo.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-3 text-sm text-neutral-500">A quick look: call → RAG → structured action → CRM update.</p>
      </div>
    </section>
  )
}
