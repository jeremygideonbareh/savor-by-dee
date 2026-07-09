import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const dismissed = localStorage.getItem('savor-announcement-dismissed')
    if (dismissed === 'true') setVisible(false)
  }, [])

  if (!mounted || !visible) return null

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-choco text-white text-center text-xs sm:text-sm py-2.5 px-4 relative"
    >
      <a href="#products" className="hover:text-gold transition-colors">
        Free delivery in Shillong on orders above <span className="font-semibold">\u20B9500</span>
      </a>
      <button
        onClick={() => {
          setVisible(false)
          localStorage.setItem('savor-announcement-dismissed', 'true')
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors text-lg leading-none"
        aria-label="Close announcement"
      >
        &times;
      </button>
    </motion.div>
  )
}
