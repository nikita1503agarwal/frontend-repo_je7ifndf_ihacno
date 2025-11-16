import { motion } from 'framer-motion'

// Thin animated neural mesh lines to evoke AI without distraction
export default function NeuralMesh({ className = '' }) {
  const lines = Array.from({ length: 9 }).map((_, i) => ({
    y: 20 + i * 9,
    delay: i * 0.12,
  }))
  return (
    <svg className={`pointer-events-none absolute inset-0 ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="nm-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(16,185,129,0)" />
          <stop offset="50%" stopColor="rgba(16,185,129,0.35)" />
          <stop offset="100%" stopColor="rgba(16,185,129,0)" />
        </linearGradient>
        <filter id="nm-b" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
        </filter>
      </defs>
      {lines.map((l, idx) => (
        <motion.path
          key={idx}
          d={`M 0 ${l.y} C 20 ${l.y - 2}, 40 ${l.y + 3}, 60 ${l.y - 1} S 100 ${l.y + 2}, 100 ${l.y}`}
          stroke="url(#nm-g)"
          strokeWidth="0.6"
          fill="none"
          filter="url(#nm-b)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.4 + l.delay, ease: 'easeOut' }}
        />
      ))}
    </svg>
  )
}
