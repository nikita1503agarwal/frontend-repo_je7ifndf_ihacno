import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap } from 'lucide-react'

const FlowParticles = () => {
  const particles = Array.from({ length: 24 })
  return (
    <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 800 300" preserveAspectRatio="none">
      {particles.map((_, i) => (
        <motion.circle
          key={i}
          cx={Math.random() * 800}
          cy={Math.random() * 300}
          r={Math.random() * 1.2 + 0.2}
          fill="rgba(16,185,129,0.45)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 6 + Math.random() * 6, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </svg>
  )
}

const DeviceIllustration = () => {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="absolute inset-0 blur-3xl bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
      <svg viewBox="0 0 800 300" className="relative w-full h-auto">
        <defs>
          <linearGradient id="body" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f5f5f4" />
            <stop offset="100%" stopColor="#e7e5e4" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.45)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0)" />
          </radialGradient>
        </defs>
        <g filter="url(#shadow)">
          <rect x="150" y="100" rx="24" ry="24" width="500" height="110" fill="url(#body)" stroke="#d6d3d1" />
          <rect x="170" y="120" rx="12" ry="12" width="460" height="70" fill="#fafaf9" stroke="#e7e5e4" />
          <circle cx="180" cy="155" r="6" fill="#a8a29e" />
          <rect x="200" y="146" width="360" height="18" rx="9" fill="#d6d3d1" />
          <rect x="570" y="146" width="40" height="18" rx="9" fill="#16a34a" opacity="0.8" />
        </g>
        <ellipse cx="400" cy="220" rx="230" ry="18" fill="url(#glow)" />
      </svg>
      <FlowParticles />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,163,74,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-14">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-sm tracking-wide text-neutral-500">Built for the Mittelstand</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold leading-tight text-neutral-900">
            Your AI that works like a real team member.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            The first locally-hosted AI assistant built for German SMEs. Faster processes, fewer mistakes, and true data privacy.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#cta" className="group inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-3 text-base font-medium shadow-sm hover:bg-emerald-700 transition-all">
              Book a 20-min Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="hidden md:flex items-center gap-4 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-emerald-600" /> DSGVO-first</span>
              <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-emerald-600" /> On-prem</span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-14">
          <DeviceIllustration />
        </motion.div>
      </div>
    </section>
  )
}
