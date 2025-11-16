import { motion } from 'framer-motion'

// Animated premium-feel background: soft aurora blobs + subtle grid
export default function Aurora({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.8), rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Aurora blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(16,185,129,0.55), rgba(16,185,129,0) 60%)' }}
        animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-28 left-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 60% 60%, rgba(5,150,105,0.45), rgba(5,150,105,0) 60%)' }}
        animate={{ x: [0, -30, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-10 right-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(52,211,153,0.4), rgba(52,211,153,0) 60%)' }}
        animate={{ x: [0, -10, 10, 0], y: [0, 15, -5, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
