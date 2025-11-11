import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DashboardDemo from './components/DashboardDemo'
import Benefits from './components/Benefits'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <HowItWorks />
      <DashboardDemo />
      <Benefits />
      <Integrations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
