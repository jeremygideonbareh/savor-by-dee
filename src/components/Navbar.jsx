import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

const navLinks = [
  {
    label: 'Delivery',
    items: [
      { label: 'Cookies', href: '#products' },
      { label: 'Brownies', href: '#products' },
      { label: 'Cakes', href: '#products' },
      { label: 'Cupcakes', href: '#products' },
    ],
  },
  {
    label: 'Pick Up',
    items: [
      { label: 'Cakes', href: '#products' },
      { label: 'Cookies', href: '#products' },
      { label: 'Cupcakes', href: '#products' },
      { label: 'Brownies', href: '#products' },
      { label: 'Corporate Orders', href: '#order' },
    ],
  },
  { label: 'Corporate Gifting', href: '#order' },
  { label: 'Locations', href: '#locations' },
  { label: 'Events', href: '#order' },
]

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-choco hover:text-rose transition-colors min-h-[44px]"
        onClick={() => setOpen((p) => !p)}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 bg-white shadow-lg border border-border rounded-lg py-2 min-w-[200px] z-50"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-choco hover:bg-cream hover:text-rose transition-colors min-h-[44px] leading-[44px]"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar({ onCartClick, onLoginClick }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="font-display text-2xl text-choco shrink-0">
            Savor<span className="text-rose">by</span>Dee
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.items ? (
                <Dropdown key={link.label} label={link.label} items={link.items} />
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-choco hover:text-rose transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button className="p-2.5 text-choco hover:text-rose transition-colors min-h-[44px] min-w-[44px]" aria-label="Search">
              <Search size={20} />
            </button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex text-sm min-h-[44px]"
              onClick={onLoginClick}
            >
              Log in
            </Button>
            <button
              className="p-2.5 text-choco hover:text-rose transition-colors relative min-h-[44px] min-w-[44px]"
              aria-label="Cart"
              onClick={onCartClick}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-rose text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount > 9 ? '9+' : cartCount}
                </motion.span>
              )}
            </button>
            <button
              className="lg:hidden p-2.5 text-choco hover:text-rose transition-colors min-h-[44px] min-w-[44px]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 lg:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border min-h-16">
              <span className="font-display text-xl text-choco">Savor<span className="text-rose">by</span>Dee</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 min-h-[44px] min-w-[44px]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100dvh-4rem)]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.items ? (
                    <>
                      <span className="block px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider">
                        {link.label}
                      </span>
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2.5 text-sm text-choco hover:bg-cream hover:text-rose rounded-md transition-colors ml-2 min-h-[44px] leading-[44px]"
                        >
                          {item.label}
                        </a>
                      ))}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm text-choco hover:bg-cream hover:text-rose rounded-md transition-colors min-h-[44px] leading-[44px]"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <hr className="my-4 border-border" />
              <Button variant="default" size="lg" className="w-full min-h-[44px]" onClick={() => { setMobileOpen(false); onCartClick() }}>
                <ShoppingCart size={16} />
                View Cart ({cartCount})
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
