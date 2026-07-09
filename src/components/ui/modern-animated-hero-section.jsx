import { useEffect, useRef, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, BadgeCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PHRASES = [
  'The Artisanal Bakery',
  'Handcrafted with Love',
  'Freshly Baked Daily',
  'Taste the Tradition',
]

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }

  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => (this.resolve = resolve))
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!from || from === ' ') {
          output += this.chars[Math.floor(Math.random() * this.chars.length)]
        } else {
          output += this.chars[Math.floor(Math.random() * this.chars.length)]
        }
      } else {
        output += from
      }
    }
    this.el.innerText = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

class MatrixRain {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.columns = []
    this.charSize = 14
    this.resize()
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight
    this.columns = []
    const cols = Math.floor(this.canvas.width / this.charSize)
    for (let i = 0; i < cols; i++) {
      this.columns[i] = Math.floor(Math.random() * this.canvas.height / this.charSize)
    }
  }

  draw() {
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = '#e78282'
    this.ctx.font = `${this.charSize}px monospace`
    for (let i = 0; i < this.columns.length; i++) {
      const char = String.fromCharCode(0x30A0 + Math.random() * 96)
      const x = i * this.charSize
      const y = this.columns[i] * this.charSize
      this.ctx.fillStyle = y < this.canvas.height / 2 ? 'rgba(231, 130, 130, 0.8)' : 'rgba(231, 130, 130, 0.2)'
      this.ctx.fillText(char, x, y)
      if (y > this.canvas.height + this.charSize) {
        this.columns[i] = 0
      }
      this.columns[i]++
    }
    this.raf = requestAnimationFrame(() => this.draw())
  }

  stop() {
    cancelAnimationFrame(this.raf)
  }
}

export default function HeroSection({ onOrderClick }) {
  const scrambleRef = useRef(null)
  const canvasRef = useRef(null)
  const matrixRef = useRef(null)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const el = scrambleRef.current
    if (!el) return
    const fx = new TextScramble(el)
    let index = 0
    const next = () => {
      fx.setText(PHRASES[index]).then(() => {
        setTimeout(next, 3000)
      })
      index = (index + 1) % PHRASES.length
    }
    next()
    return () => cancelAnimationFrame(fx.frameRequest)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rain = new MatrixRain(canvas)
    matrixRef.current = rain
    rain.draw()
    const handleResize = () => rain.resize()
    window.addEventListener('resize', handleResize)
    return () => {
      rain.stop()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative h-dvh min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: imgLoaded ? 1 : 1.1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=90"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        loading="eager"
        onLoad={() => setImgLoaded(true)}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/80 z-10" />

      <div className="relative z-20 w-full px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8"
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display text-white leading-[1.1] mb-4 min-h-[1.2em]"
        >
          <span ref={scrambleRef} className="text-white" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/70 text-base sm:text-lg max-w-lg mx-auto mb-8 text-balance"
        >
          Handcrafted cakes, cookies &amp; sweet treats made with love in Shillong.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
            className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 min-h-[44px]"
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Story
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
