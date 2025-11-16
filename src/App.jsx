import Hero from './components/Hero'
import Proof from './components/Proof'
import ProductSplit from './components/ProductSplit'
import HowItWorks from './components/HowItWorks'
import CoreValue from './components/CoreValue'
import VideoDemo from './components/VideoDemo'
import Pricing from './components/Pricing'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] text-neutral-900">
      <header className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-600" />
          <span className="font-semibold tracking-tight">Voicera</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
          <a href="#how" className="hover:text-neutral-900">How it works</a>
          <a href="#" className="hover:text-neutral-900">Pricing</a>
          <a href="#cta" className="rounded-full bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800">Book Demo</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Proof />
        <ProductSplit />
        <HowItWorks />
        <CoreValue />
        <VideoDemo />
        <Pricing />
        <FooterCTA />
      </main>
    </div>
  )
}

export default App
