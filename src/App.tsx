import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { GoldDivider } from './components/ui/GoldDivider'
import { Expertise } from './components/Expertise'
import { TrustBlock } from './components/TrustBlock'
import { TransitionDivider } from './components/TransitionDivider'
import { Biography } from './components/Biography'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <GoldDivider />
        <Expertise />
        <GoldDivider />
        <TrustBlock />
        <GoldDivider />
        <TransitionDivider />
        <Biography />
        <GoldDivider />
        <Process />
        <GoldDivider />
        <Testimonials />
        <GoldDivider />
        <CTASection />
      </main>

      <GoldDivider />
      <Footer />
      <GoldDivider opacity={0.35} animate={false} />
    </>
  )
}
