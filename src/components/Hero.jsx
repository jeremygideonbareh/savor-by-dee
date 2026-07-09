import { useRef, useState, useEffect, useCallback } from 'react'
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion'
import { Star, BadgeCheck, ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HERO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=90',
    mobileSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=85',
    alt: 'Artisanal bakery display',
  },
  {
    src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&q=90',
    mobileSrc: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=85',
    alt: 'Freshly baked cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1600&q=90',
    mobileSrc: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=85',
    alt: 'Handcrafted cupcakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=1600&q=90',
    mobileSrc: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=85',
    alt: 'Creamy cheesecake',
  },
  {
    src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1600&q=90',
    mobileSrc: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=85',
    alt: 'Chocolate chip cookies',
  },
]

export default function Hero({ onOrderClick }) {
  const containerRef = useRef(null)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState({})

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const clipProgress = useTransform(scrollYProgress, [0, 1], [12, 0])
  const clipPathVal = useTransform(clipProgress, (v) => `inset(${v}% 0% 0% 0%)`)
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.8], [0, -80])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused])

  const preloadNext = useCallback((idx) => {
    const next = (idx + 1) % HERO_IMAGES.length
    if (!imagesLoaded[next]) {
      const img = new Image()
      img.src = HERO_IMAGES[next].src
      img.onload = () => setImagesLoaded((prev) => ({ ...prev, [next]: true }))
    }
  }, [imagesLoaded])

  useEffect(() => {
    preloadNext(currentIdx)
  }, [currentIdx, preloadNext])

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh sm:h-[200vh] -mt-16 overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="sm:sticky sm:top-0 h-dvh overflow-hidden bg-[#0a0a0a]">
        <motion.div className="absolute inset-0" style={{ clipPath: clipPathVal }}>
          <AnimatePresence mode="popLayout">
            {HERO_IMAGES.map((img, idx) => (
              idx === currentIdx && (
                <motion.img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              )
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"
          style={{ opacity: overlayOpacity }}
        />

        <motion.div
          className="absolute inset-0 flex items-end pb-8 sm:pb-16 px-4 sm:px-8"
          style={{ y: contentY }}
        >
          <div className="max-w-3xl mx-auto text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
            >
              <Star size={16} className="text-gold fill-gold shrink-0" />
              <span className="text-white text-sm font-medium">4.6</span>
              <span className="text-white/60 text-xs hidden sm:inline">(312)</span>
              <BadgeCheck size={14} className="text-gold shrink-0" />
              <span className="text-white/70 text-xs">Verified</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 16, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display text-white leading-[1.05] mb-3 text-balance"
            >
              The Artisanal <br />
              <motion.span
                className="bg-gradient-to-r from-rose via-gold to-rose bg-[length:200%_auto] text-transparent bg-clip-text inline-block"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                Bakery
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 16, delay: 0.6 }}
              className="text-white/80 text-base sm:text-lg max-w-lg mx-auto mb-6 sm:mb-8 text-balance"
            >
              Handcrafted cakes, cookies &amp; sweet treats made with love in Shillong.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.8 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                animate={{ boxShadow: ['0 0 0 0 rgba(231,130,130,0.4)', '0 0 0 12px rgba(231,130,130,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-xl"
              >
                <Button
                  size="lg"
                  onClick={onOrderClick}
                  className="bg-rose hover:bg-rose/90 text-white min-h-[44px] min-w-[120px] shimmer-btn group relative overflow-hidden"
                >
                  <Sparkles size={16} className="mr-1 group-hover:scale-110 transition-transform" />
                  Order Now
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Button>
              </motion.div>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/15 backdrop-blur-md text-white border-white/30 hover:bg-white/25 min-h-[44px]"
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Story
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                idx === currentIdx ? 'bg-rose w-4 sm:w-5' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Image ${idx + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={24} className="text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
