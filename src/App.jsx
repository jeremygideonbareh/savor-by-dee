import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Story from './components/Story'
import BestSellers from './components/BestSellers'
import Trending from './components/Trending'
import Press from './components/Press'
import Locations from './components/Locations'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'
import CartDrawer from './components/CartDrawer'
import LoginModal from './components/LoginModal'
import { CartProvider } from './context/CartContext'

export default function App() {
  const [orderOpen, setOrderOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <CartProvider>
      <OrderModal open={orderOpen} onOpenChange={setOrderOpen} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <AnnouncementBar />
      <Navbar onCartClick={() => setCartOpen(true)} onLoginClick={() => setLoginOpen(true)} />
      <Hero onOrderClick={() => setOrderOpen(true)} />
      <ProductGrid />
      <Story />
      <BestSellers />
      <Trending />
      <Press />
      <Locations />
      <Footer />
    </CartProvider>
  )
}
