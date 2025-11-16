import Hero from './components/Hero'
import Proof from './components/Proof'
import ProductSplit from './components/ProductSplit'
import HowItWorks from './components/HowItWorks'
import CoreValue from './components/CoreValue'
import VideoDemo from './components/VideoDemo'
import Pricing from './components/Pricing'
import FooterCTA from './components/FooterCTA'
import Aurora from './components/Aurora'
import NeuralMesh from './components/NeuralMesh'
import ParallaxSection from './components/ParallaxSection'

function App() {
  return (
    <div className="relative min-h-screen bg-[#f8f6f2] text-neutral-900">
      {/* Global AI background accents */}
      <Aurora />
      <NeuralMesh className="opacity-60" />

      <header className="relative mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-600 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
          <span className="font-semibold tracking-tight">Voicera</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
          <a href="#how" className="hover:text-neutral-900">How it works</a>
          <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
          <a href="#cta" className="rounded-full bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800">Book Demo</a>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <ParallaxSection>
          <Proof />
        </ParallaxSection>
        <ParallaxSection>
          <ProductSplit />
        </ParallaxSection>
        <ParallaxSection>
          <HowItWorks />
        </ParallaxSection>
        <ParallaxSection>
          <CoreValue />
        </ParallaxSection>
        <ParallaxSection>
          <VideoDemo />
        </ParallaxSection>
        <ParallaxSection>
          <Pricing />
        </ParallaxSection>
        <ParallaxSection>
          <FooterCTA />
        </ParallaxSection>
      </main>
    </div>
  )
}

export default App
