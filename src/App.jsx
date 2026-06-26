import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import { HeroSection } from './components/ui/hero-section-2'
import About from './components/About'
import SignatureItems from './components/SignatureItems'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'
import Loader from './components/Loader'
import DoodleDivider from './components/DoodleDivider'


function App() {
  const [loading, setLoading] = useState(true)
  const [orderOpen, setOrderOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F4F0]"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Navbar onOrder={() => setOrderOpen(true)} />

        <HeroSection
          onOrder={() => setOrderOpen(true)}
          slogan="THE ARTISANAL BAKERY"
          title={
            <>
              Every creation <br />
              is a work of <br />
              <span className="text-primary italic">art</span>
            </>
          }
          subtitle="Custom cakes, cupcakes, and artisanal bakes — handcrafted with love in our Laban kitchen. Pre-book your order at least 2 days in advance."
          callToAction={{
            text: 'ORDER NOW',
          }}
          contactInfo={{
            website: '',
            phone: '+91 98365 37447',
            address: 'Laban, Shillong, Meghalaya',
          }}
        />

        <About />
        <DoodleDivider />
        <SignatureItems />
        <DoodleDivider />
        <Gallery />
        <DoodleDivider />
        <Reviews />
        <Contact onOrder={() => setOrderOpen(true)} />
        <Footer />
      </motion.div>

      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
      <Toaster richColors position="bottom-right" />
    </div>
  )
}

export default App
