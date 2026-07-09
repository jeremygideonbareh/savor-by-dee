import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, BadgeCheck, ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const bgBlobs = [
  { size: 400, color: 'bg-rose/[0.08]', x: '10%', y: '10%', dur: 25, dx: [0, 60, -40, 0], dy: [0, -50, 30, 0] },
  { size: 300, color: 'bg-gold/[0.06]', x: '70%', y: '20%', dur: 20, dx: [0, -50, 40, 0], dy: [0, 60, -30, 0] },
  { size: 250, color: 'bg-rose/[0.05]', x: '50%', y: '70%', dur: 30, dx: [0, 40, -60, 0], dy: [0, -30, 50, 0] },
  { size: 350, color: 'bg-gold/[0.04]', x: '20%', y: '80%', dur: 22, dx: [0, -40, 50, 0], dy: [0, 40, -50, 0] },
]

const floatDecorations = [
  { icon: Sparkles, x: '12%', y: '25%', size: 22, delay: 0, color: 'text-gold' },
  { icon: Sparkles, x: '78%', y: '35%', size: 16, delay: 0.8, color: 'text-rose' },
  { icon: Star, x: '82%', y: '65%', size: 20, delay: 1.5, color: 'text-gold' },
  { icon: Star, x: '18%', y: '72%', size: 14, delay: 2.2, color: 'text-rose' },
]

const particles = Array.from({ length: 12 }, (_, i) => ({
  x: `${5 + Math.random() * 90}%`,
  delay: i * 0.4,
  size: 2 + Math.random() * 3,
}))

export default function Hero({ onOrderClick }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <section className="relative h-dvh min-h-[500px] sm:min-h-[600px] flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 z-10" />

      {bgBlobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${blob.color} blur-[100px] pointer-events-none`}
          style={{ width: blob.size, height: blob.size, left: blob.x, top: blob.y }}
          animate={{ x: blob.dx, y: blob.dy }}
          transition={{ duration: blob.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20 pointer-events-none"
          style={{ left: p.x, bottom: '-10px' }}
          animate={{ y: [0, -window.innerHeight - 100], opacity: [0, 0.6, 0] }}
          transition={{ duration: 12 + i * 0.5, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}

      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: imgLoaded ? 1 : 1.1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=90"
        alt="Savor by Dee Bakery"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        onLoad={() => setImgLoaded(true)}
      />

      {floatDecorations.map((d, i) => (
        <motion.div
          key={i}
          className={`absolute z-10 ${d.color}`}
          style={{ left: d.x, top: d.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1.2, 0],
            y: [0, -30, -60],
          }}
          transition={{
            duration: 5,
            delay: d.delay,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          <d.icon size={d.size} fill="currentColor" />
        </motion.div>
      ))}

      <div className="relative z-20 w-full px-4 sm:px-8 pb-8 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
          >
            <Star size={16} className="text-gold fill-gold shrink-0" />
            <span className="text-white text-sm font-medium">4.6</span>
            <span className="text-white/60 text-xs hidden sm:inline">(312)</span>
            <BadgeCheck size={14} className="text-gold shrink-0" />
            <span className="text-white/70 text-xs">Verified</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/80 text-base sm:text-lg max-w-lg mb-6 sm:mb-8 text-balance"
          >
            Handcrafted cakes, cookies &amp; sweet treats made with love in Shillong.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-3"
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
        </motion.div>
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
    </section>
  )
}
