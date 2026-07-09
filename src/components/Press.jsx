import { motion } from 'framer-motion'
import { pressLogos } from '@/data/products'

export default function Press() {
  return (
    <section id="press" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs text-muted uppercase tracking-[0.2em] font-semibold mb-6">As featured in</p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {pressLogos.map((logo, i) => (
            <motion.span
              key={logo.alt}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 150, damping: 15, delay: i * 0.08 }}
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-cream/60 border border-border text-[11px] sm:text-xs text-muted font-medium tracking-tight whitespace-nowrap"
            >
              {logo.alt}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
