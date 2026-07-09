import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FLOURISHES = ['✦', '✧', '⋆', '✶', '✷']

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [flourish, setFlourish] = useState(FLOURISHES[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setFlourish(FLOURISHES[Math.floor(Math.random() * FLOURISHES.length)])
    }, 400)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        const increment = prev < 60 ? 4 + Math.random() * 6 : prev < 85 ? 1 + Math.random() * 3 : 0.3 + Math.random() * 0.7
        return Math.min(prev + increment, 100)
      })
    }, 80)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => onFinish?.(), 500)
      return () => clearTimeout(timeout)
    }
  }, [progress, onFinish])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]"
    >
      <div className="relative mb-8">
        <motion.div
          className="text-6xl sm:text-7xl font-display text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-rose">S</span>avor
          <motion.span
            className="inline-block mx-2 text-rose/60"
            animate={{ opacity: [0.3, 1, 0.3], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {flourish}
          </motion.span>
          <span className="text-rose">D</span>ee
        </motion.div>
        <motion.p
          className="text-white/40 text-sm tracking-[0.3em] uppercase mt-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The Artisanal Bakery
        </motion.p>
      </div>

      <div className="w-48 sm:w-56 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-rose to-gold rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.p
        className="text-white/30 text-xs mt-3 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {Math.round(progress)}%
      </motion.p>
    </motion.div>
  )
}
